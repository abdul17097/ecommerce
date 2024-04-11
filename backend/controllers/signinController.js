const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSigninController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) throw new Error("Please enter email");
    if (!password) throw new Error("Please enter password");
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      const comparePassword = await bcrypt.compare(
        password,
        checkUser.password
      );
      if (comparePassword) {
        const token = jwt.sign(
          {
            email: checkUser.email,
            id: checkUser._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: 3600,
          }
        );
        res.cookie("access_token", token, { httpOnly: true }).status(200).json({
          error: false,
          message: "Login successful",
          success: true,
          token: token,
        });
      } else {
        throw new Error("Invalid password");
      }
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(404).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

module.exports = userSigninController;
