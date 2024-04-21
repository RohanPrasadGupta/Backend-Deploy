const TrialUser = require("../models/TrialUserModel");
const TrialBlog = require("../models/TrialBlogModel");

exports.getUsers = async (req, res) => {
  try {
    console.log(req.query);
    const users = await TrialUser.find().populate({
      path: "blogs",
      model: "TrialBlog",
    });

    res.status(200).json({
      status: "success",
      results: users.length,
      data: users,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const doc = await TrialUser.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        doc,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.getBlogs = async (req, res) => {
  try {
    const blogs = await TrialBlog.find();

    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await TrialBlog.create(req.body);

    res.status(200).json({
      status: "success",
      data: {
        blog,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.addBlogToUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { blogId } = req.body;
    console.log(blogId);
    // Create the blog
    const blog = await TrialBlog.findById(blogId);
    console.log(blog);

    // Find the user by ID
    const user = await TrialUser.findById(userId);

    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found",
      });
    }

    // Push the new blog's ID into the user's blogs array
    user.blogs.push(blog._id);

    // Save the updated user document
    await user.save();

    res.status(200).json({
      status: "success",
      message: "Blog added to user successfully",
      data: {
        user,
        blog,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: err.message,
    });
  }
};
