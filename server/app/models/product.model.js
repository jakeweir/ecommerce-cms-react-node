const sql = require("./db.js");

// construct a product
const Product = function(product) {
    this.title = product.title;
    this.sku = product.sku;
    this.category = product.category;
    this.salesPrice = product.salesPrice;
    this.costPrice = product.costPrice;
    this.stock = product.stock;
    this.taxable = product.taxable;
    this.description = product.description;
    this.createdBy = product.createdBy;
    this.published = product.published;
};

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        console.log("Created Product: ", { id: res.insertId, ...newProduct });
        result(null, { id: res.insertId, ...newProduct });
    });
};

Product.findById = (productId, result) => {
    sql.query(`SELECT * FROM products WHERE id = ${productId}`, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("Found Product: ", res[0]);
            result(null, res[0]);
            return;
        }

        // product not found
        result({ kind: "not_found" }, null);
    });
};

Product.getAll = result => {
    sql.query("SELECT * FROM products", (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        console.log("Products: ", res);
        result(null, res);
    });
};

Product.updateById = (id, product, result) => {
    sql.query(
        "UPDATE products SET title = ?, sku = ?, category = ?, salesPrice = ?, costPrice = ?, stock = ?, taxable = ?, description = ?, createdBy = ?, published = ? WHERE id = ?",
        [product.title, product.sku, product.category, product.salesPrice, product.costPrice, product.stock, product.taxable, product.description, product.createdBy, product.published, id],
        (err, res) => {
            if (err) {
                console.log("Error: ", err);
                result(null, err);
                return;
            }

            if (res.affectedRows == 0) {
                // product not found
                result({ kind: "not_found" }, null);
                return;
            }

            console.log("Product Updated: ", { id: id, ...product });
            result(null, { id: id, ...product });
        }
    );
};

Product.delete = (id, result) => {
    sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // product not found
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("Removed Product with ID: ", id);
        result(null, res);
    });
};

Product.deleteAll = result => {
    sql.query("DELETE FROM products", (err, res) => {
      if (err) {
        console.log("Error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} products`);
      result(null, res);
    });
  };
  
  module.exports = Product;
