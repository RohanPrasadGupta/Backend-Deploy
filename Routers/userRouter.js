const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router.route("/User").post(userController.addUser).get(userController.getUsers);

router
  .route("/:Id")
  .get(userController.getUser)
  .delete(userController.deleteUser)
  .patch(userController.updateOne);

module.exports = router;
