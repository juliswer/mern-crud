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
  try {
    const { id, commentId } = req.params;

    await Note.findByIdAndUpdate(id, {
      $pull: { comments: { _id: commentId } },
    });

    res.status(200).send("deleted succesfully");
  } catch (error) {
    console.log("Error: ", error);
  }
};

const updateComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const { comment } = req.body;

    await Note.findByIdAndUpdate(id, {
        comments: comment,
        new: true
    });
    res.status(200).send('comment updated');
  } catch (error) {
      console.log('Error: ', error)
  }
};

module.exports = {
  getComments,
  postComment,
  deleteComment,
  updateComment,
};
