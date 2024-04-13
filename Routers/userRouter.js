const express = require("express");
const userController = require("../controller/userController");
const authController = require("../controller/authController");

const router = express.Router();

router
  .route("/User")
  .post(userController.checkBody, userController.addUser)
  .get(userController.getUsers);

router.route("/signIn").post(authController.signup);
router.route("/logIn").post(authController.login);

router
  .route("/:Id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateOne);

module.exports = router;
