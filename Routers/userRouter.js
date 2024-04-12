const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.route("/addUser").post(userController.addUser);

router.route("/getAll").get(userController.getUser);

module.exports = router;
