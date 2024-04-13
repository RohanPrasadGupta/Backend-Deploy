const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  try {
    console.log(req.query);
    const users = await User.find(req.query);

    if (!users || users.length === 0) {
      throw new Error("No users Found");
    }
    res.status(200).json({
      status: "success",
      results: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.checkBody = (req, res, next) => {
  try {
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(401).json({
        status: "Error",
        message: "Password does not Match",
      });
    }

    next();
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
    res.status(200).json({
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

exports.getUser = async (req, res) => {
  try {
    const query = await User.findById(req.params.Id);
    const user = await query;
    if (!user) {
      throw new Error("No document found for the given ID");
    }
    res.status(201).json({
      status: "success",
      data: {
        data: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const query = await User.findByIdAndDelete(req.params.Id);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.updateOne = async (req, res) => {
  try {
    // console.log(req.params.Id);
    // console.log(req.body);

    const user = await User.findByIdAndUpdate(req.params.Id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      throw new Error("No document found for the given ID");
    }
    res.status(200).json({
      status: "success",
      data: {
        data: user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
