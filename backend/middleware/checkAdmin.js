const User = require("../model/userModel");

const checkAdmin = async (req, res, next) => {
  try {
    const userId = req.user;
    const user = await User.findOne({ _id: userId });
    if (user.role === "admin") {
      next();
    } else {
      res.status(401).json({
        error: true,
        message: "Unauthorized: Invalid token",
        success: false,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: true,
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  checkAdmin,
};
