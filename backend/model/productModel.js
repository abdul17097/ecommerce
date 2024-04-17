const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
  },
  brandName: {
    type: String,
  },
  category: {
    type: String,
  },
  productImages: {
    type: Array,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  sellingPrice: {
    type: Number,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
