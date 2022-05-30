const Router = require('express')
const router = new Router();
const userController = require('../controller/user.controller');
const { check } = require('express-validator')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/login', userController.login)
router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть больше 4 и меньше 10 символов').isLength({min: 4, max: 10})
] , userController.registration)
router.get('/auth', authMiddleware ,userController.check)


module.exports = router