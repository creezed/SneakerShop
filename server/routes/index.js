const Router = require('express')
const router = new Router();

const brandRouter = require('./brand.router');
const productRouter = require('./product.router');
const categoryRouter = require('./category.router')
const sizeRouter = require('./size.router')
const userRouter = require('./user.router')
const basketRouter = require('./basket.router')
const favoriteRouter = require('./favorite.router')

router.use('/brands', brandRouter)
router.use('/category', categoryRouter)
router.use('/products', productRouter)
router.use('/size', sizeRouter)
router.use('/user', userRouter)
router.use('/basket', basketRouter)
router.use('/favorite', favoriteRouter)

module.exports = router