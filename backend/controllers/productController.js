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
  categoryList: async (req, res) => {
    try {
      const productCategory = await Product.distinct("category");
      const categoryList = [];
      for (let category of productCategory) {
        const firstProduct = await Product.findOne({ category });
        categoryList.push(firstProduct);
      }
      res.status(201).json({
        message: "Category List",
        error: false,
        success: true,
        categoryList,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  categoryProduct: async (req, res) => {
    try {
      const { category, limit } = req.body;
      const product = await Product.find({ category }).limit(limit);
      res.status(201).json({
        message: "Product category",
        error: false,
        success: true,
        product,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const { productId } = req.body;
      const singleProduct = await Product.findById(productId);
      if (!singleProduct) {
        throw new Error("Product not found");
      }
      res.status(200).json({
        message: "Product found",
        error: false,
        success: true,
        product: singleProduct,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  searchProduct: async (req, res) => {
    try {
      const { search } = req.query;
      console.log(search);
      if (!search) {
        throw new Error("Please enter a search term");
      }
      const regex = new RegExp(search, "i", "g");
      const product = await Product.find({
        $or: [
          {
            productName: regex,
          },
          {
            category: regex,
          },
        ],
      });
      res.status(200).json({
        message: "Product found",
        error: false,
        success: true,
        product,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  filterProduct: async (req, res) => {
    console.log(req.body);
    try {
      const { category } = req.body;
      const product = await Product.find({ category: { $in: category } });
      res.status(201).json({
        message: "Product category",
        error: false,
        success: true,
        product,
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
