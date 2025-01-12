const Product = require("../models/productModel");

const getallProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

const createNewProduct = async (req, res) => {
  console.log("this api for create product");
  try {
    const product = req.body;
    console.log(product);
    // create new product in the mongo model
    const newProduct = new Product(product);
    // save the user in the database
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

module.exports = { getallProduct, createNewProduct };
