const { BasketProduct, Basket, Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async getAll(req, res, next) {
        try {
            const user = req.user
            let basket = await Basket.findOne( { where: { userId: user.id } } )
            console.log(basket)
            if (!basket) {
                return res.json({message: "Корзина пуста"})
            }
            const basketSneaker = await BasketProduct.findAll(
                {
                    where: { basketId: basket.id },
                    attributes: { exclude: ["createdAt", "updatedAt", "id"] },
                    include: [{
                        model: Product
                    }]
                })
            res.json({product: basketSneaker})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const user = req.user
            let basket = await Basket.findOne( { where: { userId: user.id } } )
            console.log(basket)
            if (!basket) {
                return res.json({message: "Корзина пуста"})
            }
            const basketSneaker = await BasketProduct.findOne(
                {
                    where: { basketId: basket.id, productId: id },
                    attributes: { exclude: ["createdAt", "updatedAt", "id"] },
                    include: [{
                        model: Product
                    }]
                })
            res.json({product: basketSneaker})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async addOne(req, res, next) {
        try {
            const { productId } = req.body
            const user = req.user

            let basket = await Basket.findOne( { where: { userId: user.id } } )
            const isBasket = await BasketProduct.findOne({
                where: { productId: productId, basketId: basket.id }
            })
            if (isBasket) {
                let count = isBasket.count + 1
                isBasket.update({ count })
                return res.json({ message: `Количество товара в корзине обновлено на ${count}` })
            }
            await BasketProduct.create({ productId: productId, basketId: basket.id})
            res.json({message: "товар успешно лежит в корзине"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delOne(req, res, next) {
        try {
            const { id } = req.params
            const user = req.user
            let basket = await Basket.findOne( { where: { userId: user.id } } )
            await BasketProduct.destroy({
                where: { basketId: basket.id, productId: id }
            })
            res.json({message: "удалено"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BasketController();