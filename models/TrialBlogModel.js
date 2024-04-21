const { mongoose, Schema } = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
});

const TrialBlog = mongoose.model("TrialBlog", BlogSchema);

module.exports = TrialBlog;
