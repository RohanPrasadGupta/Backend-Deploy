const mongoose = require("mongoose");

const guestsModel = new mongoose.Schema({
  createdAT: { type: Date, default: Date.now() },
  fullName: { type: String },
  email: { type: String },
  nationalId: { type: String },
  nationality: { type: String },
  countryFlag: { type: String },
});

const Guests = mongoose.model("guests", guestsModel);

module.exports = Guests;
