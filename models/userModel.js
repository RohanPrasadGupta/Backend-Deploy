const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  password: String,
  confirmPassword: String,
});

const User = mongoose.model("TestOwn", userScheme);

module.exports = User;
