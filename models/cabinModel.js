const mongoose = require("mongoose");

const cabinModel = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now() },
  name: { type: String },
  maxCapacity: { type: Number },
  regularPrice: { type: Number },
  discount: { type: Number },
  description: { type: String },
  image: { type: String },
});

const Cabin = mongoose.model("cabin", cabinModel);

module.exports = Cabin;
