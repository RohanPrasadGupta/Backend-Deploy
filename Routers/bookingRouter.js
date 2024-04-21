const express = require("express");
const bookingController = require("../controller/bookingController");

const router = express.Router();

router.route("/getAllBookings").get(bookingController.getAllBookings);
router.route("/createBooking").post(bookingController.createBooking);
router.route("/getBooking/:id").get(bookingController.getBooking);

module.exports = router;
