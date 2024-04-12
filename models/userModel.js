const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: String,
  email: String,
});

const User = mongoose.model("TestOwn", userScheme);

module.exports = User;
