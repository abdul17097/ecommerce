const express = require("express");
const productController = require("../controllers/productController");
const authToken = require("../middleware/authToken");
const { checkAdmin } = require("../middleware/checkAdmin");
const router = express.Router();

router.post(
  "/upload-product",
  authToken,
  checkAdmin,
  productController.uploadProduct
);
router.get(
  "/all-products",
  authToken,
  checkAdmin,
  productController.getAllProducts
);
router.post(
  "/update-product",
  authToken,
  checkAdmin,
  productController.updateProduct
);

module.exports = router;
