const { mongoose, Schema } = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  email: { type: String, default: null },
  blogs: [{ type: Schema.Types.ObjectId, ref: "TrialBlog" }],
  age: { type: Number, default: null },
});

const TrialUser = mongoose.model("TrialUsers", UserSchema);

module.exports = TrialUser;
