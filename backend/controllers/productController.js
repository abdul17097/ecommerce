const Product = require("../model/productModel");

const productController = {
  uploadProduct: async (req, res) => {
    try {
      const newProduct = await Product.create(req.body);
      res.status(201).json({
        message: "Product created successfully",
        error: false,
        success: true,
        data: newProduct,
      });
      console.log(newProduct);
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json({
        message: "Product found",
        error: false,
        success: true,
        products,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const { _id, ...restbody } = req.body;
      const updateProduct = await Product.findByIdAndUpdate(_id, restbody);
      res.status(200).json({
        message: "Product updated successfully",
        error: false,
        success: true,
        data: updateProduct,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
};

module.exports = productController;
