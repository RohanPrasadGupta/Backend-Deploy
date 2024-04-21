const HotelUser = require("../models/hotelUserModel");

exports.createUser = async (req, res) => {
  try {
    const userData = req.body;
    if (!userData) throw new Error("Enter Full details");

    const response = await HotelUser.create(userData);

    res.status(200).json({
      status: "success",
      userData,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await HotelUser.find();

    if (!users) throw new Error("Enter Full details");

    res.status(200).json({
      status: "success",
      documentsFound: users.length,
      users,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(email, password);

    const userFind = await HotelUser.findOne({ email });
    console.log(userFind);
    if (!userFind) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }
    if (userFind.password != password) {
      throw new Error("email or password is wrong...");
    }

    res.status(200).json({
      status: "success",
      userFind,
    });
  } catch (err) {
    res.status(404).json({
      status: "failed",
      message: err.message,
    });
  }
};
