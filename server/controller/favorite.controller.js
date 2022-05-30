const { FavouritesProduct, Favourites, Product} = require('../models/models')
const ApiError = require('../error/ApiError')

class FavoriteController {
    async getAll(req, res, next) {
        try {
            const user = req.user
            let favorite = await Favourites.findOne( { where: { userId: user.id } } )
            if (!favorite) {
                return res.json({message: "В избраном пусто"})
            }
            const favouriteSneaker = await FavouritesProduct.findAll(
                {
                    where: { favoriteId: favorite.id },
                    attributes: { exclude: ["createdAt", "updatedAt", "id"] },
                    include: [{
                        model: Product
                    }]
                })
            res.json({product: favouriteSneaker})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }
    async getOne(req, res, next) {
        try {
            const { id } = req.params
            const user = req.user
            let favorite = await Favourites.findOne( { where: { userId: user.id } } )
            if (!favorite) {
                return res.json({message: "Корзина пуста"})
            }
            const basketSneaker = await FavouritesProduct.findOne(
                {
                    where: { favoriteId: favorite.id, productId: id },
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

            let favorite = await Favourites.findOne( { where: { userId: user.id } } )
            const isFavorite = await FavouritesProduct.findOne({
                where: { productId: productId, favoriteId: favorite.id }
            })
            if (isFavorite) {
                return res.json({ message: `Товар уже в избранном` })
            }
            await FavouritesProduct.create({ productId: productId, favoriteId: favorite.id})
            res.json({message: "товар успешно лежит в корзине"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async delOne(req, res, next) {
        try {
            const { id } = req.params
            const user = req.user
            let favorite = await Favourites.findOne( { where: { userId: user.id } } )
            await FavouritesProduct.destroy({
                where: { favoriteId: favorite.id, productId: id }
            })
            res.json({message: "удалено"})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new FavoriteController();