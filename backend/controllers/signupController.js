const bcrypt = require("bcryptjs");
const User = require("../model/userModel");

const userSignupController = async (req, res) => {
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
};

module.exports = userSignupController;
