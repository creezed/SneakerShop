const Router = require('express')
const router = new Router();
const brandController = require('../controller/brand.controller');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware')

router.get('/', brandController.getAll)
router.get('/:id', brandController.getOne)
router.post('/', checkRoleMiddleware("ADMIN") , brandController.create)
router.put('/:id', checkRoleMiddleware("ADMIN") ,brandController.update)

module.exports = router