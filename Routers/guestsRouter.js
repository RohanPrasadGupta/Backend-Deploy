const express = require("express");
const guestsController = require("../controller/guestsController");

const router = express.Router();

router.route("/getAllGuests").get(guestsController.getAllGuests);
router.route("/createGuest").post(guestsController.createGuests);

module.exports = router;
