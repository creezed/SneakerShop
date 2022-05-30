const Router = require('express')
const router = new Router();
const favoriteController = require('../controller/favorite.controller');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware ,favoriteController.getAll)
router.get('/:id', authMiddleware ,favoriteController.getOne)
router.post('/add', authMiddleware ,favoriteController.addOne)
router.delete('/:id', authMiddleware ,favoriteController.delOne)

module.exports = router