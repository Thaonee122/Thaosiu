const productRoutes = require("./product.routes")
const homeRoutes = require("./home.routes")

module.exports = (app) => {
    app.use("/home", homeRoutes);
    app.use("/products", productRoutes);
}