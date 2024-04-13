const express = require("express");
const authToken = require("../middleware/authToken");
const { getAllUsers } = require("../controllers/userContoller");
const router = express.Router();

router.get("/all-users", authToken, getAllUsers);

module.exports = router;
