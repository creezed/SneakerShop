const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket, Favourites } = require('../models/models');
const ApiError = require('../error/ApiError');
const { validationResult } = require('express-validator')

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role
    }
    return jwt.sign(payload, process.env.SECRETKEY,{expiresIn: "24h"})
}


class UserController {

    async registration(req, res, next) {
        try {
            const error = validationResult(req)
            if(!error.isEmpty()) {
                return res.status(400).json({message: "Ошибка при регситрации", error})
            }
            const { email, password, role, username } = req.body;
            const candidate = await User.findOne({ where: { email }})
            if (candidate) {
                next(ApiError.badRequest("Такой пользователь уже существует"))
            }
            const hashPassword = bcrypt.hashSync(password, 5)
            const user = await User.create({email, password: hashPassword, role, name: username})
            await Basket.create({userId: user.id});
            await Favourites.create({userId: user.id});
            const token = generateAccessToken(user.id, user.role)
            res.json({user, token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body
            const user = await User.findOne( { where: { email } } )
            if (!user) {
                return  next(ApiError.badRequest("Пользователь с таким Email не найден"))
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            console.log(validPassword)
            if (!validPassword) {
                return  next(ApiError.badRequest("Введён неверный пароль"))
            }
            const token = generateAccessToken(user.id, user.role)
            res.json({"token": token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async check(req, res, next) {
        try {
            const user = req.user
            const token = generateAccessToken(user.id, user.role)
            res.json({"token": token})
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

}

module.exports = new UserController();