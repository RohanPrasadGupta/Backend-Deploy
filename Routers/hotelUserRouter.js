const express = require("express");
const hotelUserController = require("../controller/hotelUserController");

const router = express.Router();

router.route("/users").get(hotelUserController.getUsers);

router.route("/user").post(hotelUserController.createUser);

router.route("/loginUser").post(hotelUserController.loginUser);

module.exports = router;
