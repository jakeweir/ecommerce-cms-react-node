module.exports = app => {
    const products = require("../controllers/product.controller.js");

    // create new product
    app.post("/products", products.create);

    // get all products
    app.get("/products", products.findAll);

    // get single product from ID
    app.get("/products/:productId", products.findOne);

    // update a product with ID
    app.put("/products/:productId", products.update);

    // delete a product with ID
    app.delete("/products/:productId", products.delete);

    // delete all products
    app.delete("/products", products.deleteAll); 
};