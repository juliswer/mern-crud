const Comment = require("../models/Comment");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
};

const postComment = async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.json(comment);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const deleteComment = async (req, res) => {
  res.json({
    message: "Delete comment",
  });
};

module.exports = {
  getComments,
  postComment,
  deleteComment,
};
