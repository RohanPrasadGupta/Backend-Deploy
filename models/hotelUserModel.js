const mongoose = require("mongoose");

const hotelUserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true },
  fullName: { type: String },
  password: { type: String },
  passwordConfirm: { type: String },
});

const HotelUser = mongoose.model("hotelUser", hotelUserSchema);

module.exports = HotelUser;
