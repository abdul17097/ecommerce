const express = require("express");
const userSignupController = require("../controllers/signupController");
const userSigninController = require("../controllers/signinController");
const authToken = require("../middleware/authToken");
const router = express.Router();

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);

router.get("/user-details", authToken, (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      error: false,
      message: "user details",
      success: true,
      user: user,
    });
  } catch (error) {
    res.status(404).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
});

module.exports = router;
