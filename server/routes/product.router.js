const Router = require('express')
const router = new Router();
const productController = require('../controller/product.controller');
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.get('/', productController.getAll)
router.get('/:id', productController.getOne)
router.delete('/:id', checkRoleMiddleware("ADMIN") , productController.deleteOne)
router.post('/', checkRoleMiddleware("ADMIN") , productController.createOne)
router.put('/:id', checkRoleMiddleware("ADMIN") , productController.updateOne)

module.exports = router