const express = require("express");
const routes = express.Router();
const {
  getallProduct,
  createNewProduct,
} = require("../controllers/productController");

routes.get("/product", getallProduct);
routes.post("/product", createNewProduct);

module.exports = routes;