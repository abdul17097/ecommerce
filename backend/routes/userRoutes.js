const express = require("express");
const authToken = require("../middleware/authToken");
const { getAllUsers } = require("../controllers/userContoller");
const userContoller = require("../controllers/userContoller");
const { checkAdmin } = require("../middleware/checkAdmin");
const router = express.Router();

router.get("/all-users", authToken, checkAdmin, userContoller.getAllUsers);
router.post("/update-user", authToken, checkAdmin, userContoller.updateUser);
module.exports = router;
