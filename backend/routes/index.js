const express = require("express");
const userSignupController = require("../controllers/signupController");
const userSigninController = require("../controllers/signinController");
const router = express.Router();

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);

module.exports = router;
