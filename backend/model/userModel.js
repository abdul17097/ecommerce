const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email uniqueness
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      default:
        "data:image/png;base64,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",
    },
    role: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
