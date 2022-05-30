const { Size } = require('../models/models')
const ApiError = require('../error/ApiError')

class SizeController {
    async getAll(req,res) {
        const size = await Size.findAll({
            attributes: {exclude: ["createdAt", "updatedAt"]}
        })
        res.json(size)
    }

    async getOne(req,res) {
        const { id } = req.params;
        const size = await Size.findOne({
            attributes: {exclude: ["createdAt", "updatedAt"]},
            where: { id }
        })
        res.json(size)
    }

    async create(req, res, next) {
        try {
            const { gender, ru, eu, uk } = req.body
            const size = await Size.create({gender,  ru, eu, uk})
            res.json(size)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params
            const { gender, ru, eu, uk } = req.body
            const size = await Size.update(
                {gender,  ru, eu, uk},
                {
                    where: { id }
                }
            )

            res.json(size)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new SizeController();