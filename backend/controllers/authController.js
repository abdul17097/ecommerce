const bcrypt = require("bcryptjs");
const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const authController = {
  // Register new user
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        throw new Error("Please provide name, email, and password");
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("Email already exists");
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name,
        email,
        password: hashPassword,
        role: "GENERAL",
      });
      res.status(201).json({
        data: newUser,
        message: "User created successfully",
        error: false,
        success: true,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
  // Login an existing user
  login: async (req, res) => {
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
              expiresIn: 36000,
            }
          );

          res
            .cookie("access_token", token, { httpOnly: true })
            .status(200)
            .json({
              error: false,
              message: "Login successful",
              success: true,
              userDetails: checkUser,
            });
        } else {
          throw new Error("Invalid Credentials");
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
  },
  //   logout
  logout: (req, res) => {
    try {
      res.clearCookie("access_token");
      res.status(200).json({
        error: false,
        message: "Logout successful",
        success: true,
      });
    } catch (error) {
      console.error("Error in userLogoutController:", error);
      res.status(500).json({
        error: true,
        message: "Internal server error",
        success: false,
      });
    }
  },
};

module.exports = authController;
