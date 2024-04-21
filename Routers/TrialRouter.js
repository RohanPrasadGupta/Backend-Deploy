const express = require("express");
const TrialController = require("../controller/TrialController");

const router = express.Router();

router
  .route("/TrialUser")
  .get(TrialController.getUsers)
  .post(TrialController.createUser);

router.route("/TrialUser/:userId").post(TrialController.addBlogToUser);

router
  .route("/TrialBlog")
  .get(TrialController.getBlogs)
  .post(TrialController.createBlog);

module.exports = router;
