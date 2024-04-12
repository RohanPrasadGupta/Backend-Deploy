const User = require("../models/userModel");

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      throw new Error("No users Found");
    }

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.addUser = async (req, res) => {
  try {
    const doc = await User.create(req.body);
    if (!doc) {
      throw new Error("No document found for the given ID");
    }

    res.status(201).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
