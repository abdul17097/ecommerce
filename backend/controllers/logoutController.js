const userLogoutController = (req, res) => {
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
};

module.exports = userLogoutController;
