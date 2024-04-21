const Guests = require("../models/guestModel");

exports.getAllGuests = async (req, res) => {
  try {
    const guests = await Guests.find();
    if (!guests) throw new Error("No cabins Found");

    res.status(200).json({
      status: "success",
      results: guests.length,
      data: guests,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createGuests = async (req, res) => {
  try {
    const guest = await Guests.create(req.body);
    if (!guest) {
      throw new Error("No document found for the given ID");
    }
    res.status(200).json({
      status: "success",
      data: {
        data: guest,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
