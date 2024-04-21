const express = require("express");
const settingController = require("../controller/settingController");

const router = express.Router();

router.route("/getAllSettings").get(settingController.getAllSettings);
router.route("/createSetting").post(settingController.createSetting);
router.route("/editSetting/:id").patch(settingController.editSettings);

module.exports = router;
