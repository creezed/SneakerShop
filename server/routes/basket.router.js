const Router = require('express')
const router = new Router();
const basketController = require('../controller/basket.controller');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', authMiddleware ,basketController.getAll)
router.get('/:id', authMiddleware ,basketController.getOne)
router.post('/add', authMiddleware ,basketController.addOne)
router.delete('/:id', authMiddleware ,basketController.delOne)

module.exports = router