const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  try {
    const token = req.cookies?.access_token;
    if (!token) {
      return res.status(400).json({
        error: true,
        message: "User not logged in",
        success: false,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({
          error: true,
          message: "Unauthorized: Invalid token",
          success: false,
        });
      }
      req.user = user._id;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = authToken;
