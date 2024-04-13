const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Please Enter email"],
  },
  password: {
    type: String,
    required: [true, "Please Enter password"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please Enter confirm password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not same",
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

userScheme.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;

  next();
});

userScheme.methods.correctPassword = async function (
  canditatePassword,
  userPassword
) {
  return await bcrypt.compare(canditatePassword, userPassword);
};

const User = mongoose.model("TestOwn", userScheme);

module.exports = User;
