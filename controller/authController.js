const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const signedToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);

    const token = signedToken(newUser._id);
    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return new Error("Please enter both email and Password");

    const user = await User.findOne({ email: email });

    if (!user || !(await user.correctPassword(password, user.password))) {
      throw new Error("Incorrect User Name or Password");
    }

    const token = signedToken(user._id);

    res.status(201).json({
      status: "success",
      token,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
