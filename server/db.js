// const mysql = require('mysql')
//
// const config = {
//     host: process.env.DB_HOST,
//     password: process.env.DB_PASSWORD,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE
// }
//
// let pool = mysql.createPool(config)
//
// module.exports = pool;
const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    process.env.DB_NAME, // Название БД
    process.env.DB_USER, // Пользователь
    process.env.DB_PASSWORD, // ПАРОЛЬ
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
