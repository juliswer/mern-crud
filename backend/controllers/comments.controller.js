const Comment = require("../models/Comment");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments)
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getComments,
};
