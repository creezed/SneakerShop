const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    number: {type: DataTypes.INTEGER, unique: true, defaultValue: null},
    gender: {type: DataTypes.ENUM('men', 'women')}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const BasketProduct = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 1}
})

const Favourites = sequelize.define('favourites', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const FavouritesProduct = sequelize.define('favourites_product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false, unique: true},
    article: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    gender: {type: DataTypes.ENUM('men', 'women'), allowNull: false},
    age: {type: DataTypes.ENUM('adults', 'children'), allowNull: false},
    isSale: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    salePrice: {type: DataTypes.INTEGER, defaultValue: null},
})

const ProductAbout = sequelize.define('product_about', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    description: {type: DataTypes.STRING, allowNull: false},
    country: {type: DataTypes.STRING, allowNull: false},
    material: {type: DataTypes.STRING, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Categories = sequelize.define('categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const CategoriesProduct = sequelize.define('product_categories', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    gender: {type: DataTypes.ENUM('men', 'women'), allowNull: false},
    ru: {type: DataTypes.DECIMAL(10,2), allowNull: false},
    eu: {type: DataTypes.DECIMAL(10,2), allowNull: false},
    uk: {type: DataTypes.DECIMAL(10,2), allowNull: false},
})

const SizeProduct = sequelize.define('product_size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    count: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Images = sequelize.define('Images', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasOne(Favourites)
Favourites.belongsTo(User)

Brand.hasMany(Product)
Product.belongsTo(Brand)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Favourites.hasMany(FavouritesProduct)
FavouritesProduct.belongsTo(Favourites)

Product.hasMany(ProductAbout, {as: 'info'})
ProductAbout.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Product.hasMany(FavouritesProduct)
FavouritesProduct.belongsTo(Product)

Product.hasMany(Images, {as: 'images'})
Images.belongsTo(Product)


// belongs to many
Categories.belongsToMany(Product, { through: CategoriesProduct })
Product.belongsToMany(Categories, { as: "categories", through: CategoriesProduct })

Size.belongsToMany(Product, { through: SizeProduct })
Product.belongsToMany(Size, { as: "size", through: SizeProduct })

module.exports = {
    User,
    Basket,
    BasketProduct,
    Favourites,
    FavouritesProduct,
    Product,
    ProductAbout,
    Size,
    SizeProduct,
    Images,
    Categories,
    CategoriesProduct,
    Brand
}