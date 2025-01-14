const express = require("express");
const routes = express.Router();
const {
  getallProduct,
  createNewProduct,
  findProduct,
} = require("../controllers/productController");

routes.get("/product", getallProduct);
routes.post("/product", createNewProduct);
routes.post("/product/find", findProduct);

module.exports = routes;
