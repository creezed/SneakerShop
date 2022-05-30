const ApiError = require('../error/ApiError')
const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }
    try {
        let token = req.headers.authorization.split(" ")[1]
        if (!token) {
            return  res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.decode(token, process.env.SECRETKEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: "Не авторизован"})
    }
}