const Router = require('express')
const router = new Router();
const sizeController = require('../controller/size.controller');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/', sizeController.getAll)
router.get('/:id', sizeController.getOne)
router.post('/', checkRoleMiddleware("ADMIN") , sizeController.create)
router.put('/:id', checkRoleMiddleware("ADMIN") ,sizeController.update)

module.exports = router