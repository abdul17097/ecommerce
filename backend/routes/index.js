const express = require("express");
const userSignupController = require("../controllers/signupController");
const userSigninController = require("../controllers/signinController");
const authToken = require("../middleware/authToken");
const userLogoutController = require("../controllers/logoutController");
const User = require("../model/userModel");
const { getAllUsers } = require("../controllers/userContoller");
const router = express.Router();

router.post("/signup", userSignupController);
router.post("/signin", userSigninController);
router.get("/logout", userLogoutController);

router.get("/user-details", authToken, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user });
    console.log(user);
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

// User Routes

router.get("/all-users", authToken, getAllUsers);
module.exports = router;
