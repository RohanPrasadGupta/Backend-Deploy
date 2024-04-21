const Setting = require("../models/settingModel");
const mergerController = require("./mergerController");

exports.getAllSettings = mergerController.getAllDoc(Setting);
exports.createSetting = mergerController.createOne(Setting);
exports.editSettings = mergerController.editOne(Setting);

// exports.getAllSettings = async (req, res) => {
//   try {
//     const settings = await Setting.find();
//     if (!settings) {
//       throw new Error("No settings Found");
//     }

//     res.status(200).json({
//       status: "success",
//       results: settings.length,
//       data: settings,
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };

// exports.createSetting = async (req, res) => {
//   try {
//     const setting = await Setting.create(req.body);
//     if (!setting) {
//       throw new Error("No settings found for the given ID");
//     }
//     res.status(200).json({
//       status: "success",
//       data: {
//         data: setting,
//       },
//     });
//   } catch (err) {
//     res.status(500).json({
//       status: "failed",
//       message: err.message,
//     });
//   }
// };
