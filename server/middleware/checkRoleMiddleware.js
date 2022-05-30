const jwt = require("jsonwebtoken");
module.exports = function (role) {
    return function (req, res, next) {
        if ("OPTIONS" === req.method) {
            next()
        }
        try {
            let token = req.headers.authorization.split(" ")[1]
            if (!token) {
                return  res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.decode(token, process.env.SECRETKEY)
            if (decoded.role !== role) {
                return  res.status(403).json({message: "Нет доступа"})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: "Не авторизован"})
        }
    }
}