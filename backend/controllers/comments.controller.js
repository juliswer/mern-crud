const Note = require("../models/Note");

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.log(error);
  }
};

const postComment = async (req, res) => {
  const { id } = req.params;

  try {
    const commentContent = req.body;
    const comment = commentContent;
    await Note.findByIdAndUpdate(id, {
      comments: { ...comment },
    });
    res.json({
      comment,
    });
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
