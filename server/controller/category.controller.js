const { Categories } = require('../models/models');
const ApiError = require('../error/ApiError')

class CategoryController {
    async getAll(req,res) {
        const category = await Categories.findAll({
            attributes: ["id","name"]
        })
        res.json(category)
    }

    async getOne(req,res) {
        const { id } = req.params;
        const category = await Categories.findOne({
            where: {id},
            attributes: ["id","name"]
        })
        res.json(category)
    }

    async create(req,res, next) {
        try {
            const { name } = req.body
            const category = await Categories.create({ name })
            console.log(name)
            res.json(category)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next) {
        try {
            const { id } = req.params
            const { name } = req.body
            const category = await Categories.update(
                { name: name },
                { where: { id }}
            )
            console.log(name)
            res.json(`Категория изменена на ${name}`)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new CategoryController();