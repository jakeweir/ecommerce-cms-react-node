const Product = require("../models/product.model.js");

exports.create = (req, res) => {

    // validation
    if (!req.body) {
        res.status(400).send({
            message: "Content cannot be empty"
        });
    }

    // create a product
    const product = new Product ({
        title: req.body.title,
        sku: req.body.sku,
        category: req.body.category, // todo
        salesPrice: req.body.salesPrice,
        costPrice: req.body.costPrice,
        stock: req.body.stock,
        taxable: req.body.taxable ? req.body.taxable : false,
        description: req.body.description,
        createdBy: req.body.createdBy,
        published: req.body.published ? req.body.published : false,
    });

    // send the product to db
    Product.create(product, (err, data) => {
        if (err)
            res.status(500).send({
                message: 
                    err.message || "An error occurred when trying to create the product."
            });
        else res.send(data);
    });
};


// retrieve all existing products from db
exports.findAll = (req, res) => {
    Product.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "An error occurred when finding products."
        });
      else res.send(data);
    });
  };


// find a single product with an ID
exports.findOne = (req, res) => {
    Product.findById(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Could not find product with id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving product with id " + req.params.productId
          });
        }
      } else res.send(data);
    });
  };


// update a product found by ID
exports.update = (req, res) => {

  // validation
  if (!req.body) {
    res.status(400).send({
      message: "Content cannot be empty"
    });
  }

  Product.updateById(
    req.params.productId,
    new Product(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
                message: `Could not find product with id ${req.params.productId}.`
              });
            } else {
              res.status(500).send({
                message: "Error updating product with id " + req.params.productId
              });
            }
        } else res.send(data);
    }
  );
};

// delete a product by ID
exports.delete = (req, res) => {
    Product.delete(req.params.productId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Could not find product with id ${req.params.productId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
          });
        }
      } else res.send({ message: `Product was deleted successfully!` });
    });
  };

// delete all products from db
exports.deleteAll = (req, res) => {
    Product.deleteAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all products."
        });
      else res.send({ message: `All Products were deleted successfully!` });
    });
  };
  

// return all 'published' products
exports.findAllPublished = (req, res) => {
    Product.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "There was an error finding all published products"
            });
        });
};
