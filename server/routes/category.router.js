const Router = require('express');
const router = new Router();
const categoryController = require('../controller/category.controller');
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");

router.get('/', categoryController.getAll)
router.get('/:id', categoryController.getOne)
router.post('/', checkRoleMiddleware("ADMIN") , categoryController.create)
router.put('/:id', checkRoleMiddleware("ADMIN") , categoryController.update)

module.exports = router