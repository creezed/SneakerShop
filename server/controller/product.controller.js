const { Images, ImagesProduct, Product, ProductAbout, CategoriesProduct, SizeProduct, Brand, Size, Categories} = require('../models/models')
const { Op } = require('sequelize')

const path = require('path')
const uuid = require('uuid')
const fs = require('fs')
const ApiError = require('../error/ApiError')


const sortedFilter = async (res, limit, offset, ...args) => {
    const data = {
        "category": "",
        "brand_name": "",
        "gender": "",
        "age": "",
        "isSale": "",
        "ru_size": "",
        "sort": ""
    };

     Object.keys(data).forEach((key,index) => {
        data[key] = String(args[index])
        if (data[key] === "undefined") delete data[key]
    })

    if (!Object.keys(data).length) {
        return  res.json(await Product.findAndCountAll({limit: limit, offset: offset}))
    }

    return res.json(await Product.findAndCountAll({
        distinct: true,
        limit: limit,
        offset: offset,
        ...(data.sort === "price"
                && {
                    order: [
                        ["price", "ASC"]
                    ],
                }
        ),
        ...(data.sort === "price_desc"
            && {
                order: [
                    ["price", "DESC"]
                ],
            }
        ),
        ...(data.sort === "sale"
            && {
                order: [
                    ["salePrice", "DESC"]
                ],
            }
        ),
        where: {
            ...(data.isSale && {
                [Op.and]: {
                    isSale: [data.isSale]
                }
            }),
            ...(data.gender && {
                gender: [data.gender.split(',')],
            }),
            ...(data.age && {
                age: [data.age.split(',')]
            }),
        },
        include: [
            {
                model: Brand,
                as: "brand",
                attributes: {exclude: ["createdAt", "updatedAt"]},
                ...(data.brand_name && {
                        where: {
                            name: [data.brand_name.split(',')]
                        }
                    }
                )
            },
            {
                model: Categories,
                as: "categories",
                attributes: {exclude: ["createdAt", "updatedAt"]},
                ...(data.category && {
                    where: {
                        name: [data.category.split(',')]
                    }
                })
            }
            ,
            {
                model: Size,
                as: "size",
                attributes: {exclude: ["createdAt", "updatedAt"]},
                ...(data.ru_size && {
                    where: {
                        ru: [data.ru_size.split(',')]
                    }
                })
            }
        ]
    }))
}

function generateArticle() {
    let abc = "abcdefghijklmnopqrstuvwxyz12345679";
    let rs = "";
    while (rs.length < 9) {
        rs += abc[Math.floor(Math.random() * abc.length)];
    }
    return rs;
}

class ProductController {

    async getAll(req, res, next) {
        try {
            let { page, limit,category, brand, gender, age, isSale, size, sort }  = req.query;
            page = Number(page) || 1;
            limit = Number(limit) || 9;
            let offset = page * limit - limit;
            await sortedFilter(res, limit, offset, category, brand, gender, age, isSale, size, sort);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getOne(req,res) {
        const { id } = req.params;

        const sneakers = await Product.findOne({
            where: {id},
            attributes: {exclude: ["createdAt", "updatedAt", "brandId"]},
            include: [
                {
                    model: Brand,
                    as: "brand",
                    attributes: {exclude: ["createdAt", "updatedAt"]}
                },
                {
                    model: ProductAbout,
                    as: "info",
                    attributes: {exclude: ["createdAt", "updatedAt"]}
                },
                {
                  model: Categories,
                  as: "categories",
                  attributes: {exclude: ["createdAt", "updatedAt"]},
                }
                ,
                {
                    model: Images,
                    as: "images",
                    attributes: {exclude: ["createdAt", "updatedAt"]},
                },
                {
                    model: Size,
                    as: "size",
                    attributes: {exclude: ["createdAt", "updatedAt"]}
                }
            ]
        })

        return res.json(sneakers)
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;
            const { article } = await Product.findOne({where: {id}});

            const sneaker = await Product.destroy({
                where: {id}
            })

            fs.rmdir(path.resolve(__dirname, "..", "static", "sneakers", `${article}`), { recursive: true } ,(err) => {
                if (err) throw err
            })

            res.json(sneaker)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async createOne(req,res, next) {
        try {
            const { name, description, country, material, price, brandId, isSale , salePrice, gender, age, categoryId, sizeId, countSize } = req.body;
            const { img } = req.files
            const article = generateArticle();
            const categories = categoryId.split(',');
            const size = sizeId.split(',');
            const count = countSize.split(',');
            const imgPath = [];
            const imgName = [];

            fs.mkdir(path.resolve(__dirname, "..", "static", "sneakers", `${article}`), (err) => {
                if (err) throw err
            })

            if (Array.isArray(img)) {
                img.forEach((item, index) => {
                    imgName.push(uuid.v4() + ".jpg")
                    imgPath.push(path.resolve(__dirname, "..", "static", "sneakers",`${article}`, imgName[index]))
                    item.mv(path.resolve(__dirname, "..", "static", "sneakers",`${article}` , imgPath[index]))
                })
            } else {
                imgName.push(uuid.v4() + ".jpg")
                imgPath.push(path.resolve(__dirname, "..", "static", "sneakers",`${article}`, imgName[0]))
                img.mv(path.resolve(__dirname, "..", "static", "sneakers",`${article}`, imgPath[0]))
            }

            const product = await Product.create({name, article: article, price, brandId, gender, age, isSale, salePrice})
            const productId = product.id

            await ProductAbout.create({description, country, material, productId})


            for (const item of categories) {
                await CategoriesProduct.create({categoryId: Number(item), productId: productId})
            }

            for (let index = 0; index < size.length; index++) {
                await SizeProduct.create({sizeId: Number(size[index]), productId: productId, count: Number(count[index])})
            }

            for (const img of imgName) {

                let imgPath = path.format({
                    root: "http:/",
                    dir: `${process.env.HOST}:${process.env.PORT}/sneakers/${article}`,
                    base: `${img}`
                })

                await Images.create({name: imgPath, productId})
            }

            return  res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async updateOne(req, res, next) {
        try {
            const { id } = req.params;
            const { name, description, country, material, price, brandId, isSale , salePrice, gender, age, categoryId, sizeId, countSize, isFavorite, isBasket } = req.body;
            const sneaker = await Product.update(
                {
                    name,
                    price,
                    brandId,
                    isSale ,
                    salePrice,
                    gender,
                    age,
                    isFavorite,
                    isBasket
                },
                {
                    where: { id }
                }
            )

            const sneakerAbout = await ProductAbout.update(
                {
                    description,
                    country,
                    material
                },
                {
                    where: { productId: id }
                }
            )

            const sneakerCategories = await CategoriesProduct.update(
                {
                    categoryId
                },
                {
                    where: { productId: id }
                }
            )

            const sneakerSize = await SizeProduct.update(
                {
                    sizeId,
                    countSize
                },
                {
                    where: { productId: id }
                }
            )
            res.json(sneaker)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
}

module.exports = new ProductController();