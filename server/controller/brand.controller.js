const { Brand } = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async getAll(req,res) {
        const brands = await Brand.findAll()
        res.json(brands)
    }

    async getOne(req,res) {
        const { id } = req.params;
        const brand = await Brand.findOne({
            where: {id}
        })
        res.json(brand)
    }

    async create(req, res, next) {
        try {
            const { name } = req.body
            const brand = await Brand.create({name: name})
            res.json(brand)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            const brand = await Brand.update(
                { name: name},
                { where: { id }}
            )
            res.json(`Бренд изменён на ${name}`)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new BrandController();