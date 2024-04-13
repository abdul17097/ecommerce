const User = require("../model/userModel");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      message: "All users",
      error: false,
      success: true,
      users,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  getAllUsers,
};
