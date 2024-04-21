const mongoose = require("mongoose");

const settingModel = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  minBookingLength: { type: Number },
  maxBookingLength: { type: Number },
  maxGuestsPerBooking: { type: Number },
  breakfastPrice: { type: Number },
});

const Setting = mongoose.model("setting", settingModel);

module.exports = Setting;
