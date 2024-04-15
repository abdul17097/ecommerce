const User = require("../model/userModel");

const userContoller = {
  getAllUsers: async (req, res) => {
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
  },
  updateUser: async (req, res) => {
    try {
      const { role, userId } = req.body;
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        { role }
      );
      console.log(userId, updatedUser);
      const findUser = await User.findOne({ _id: userId });
      res.status(200).json({
        data: updatedUser,
        message: "User updated successfully",
        error: false,
        success: true,
      });
    } catch (error) {
      res.status(404).json({
        message: error.message,
        error: true,
        success: false,
      });
    }
  },
};

module.exports = userContoller;
