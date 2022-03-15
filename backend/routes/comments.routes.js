const { Router } = require("express");
const {
  getComments,
  postComment,
  deleteComment,
  updateComment
} = require("../controllers/comments.controller");

const router = Router();

router.get("/note/:id/comments", getComments);

router.post("/note/:id/comments", postComment);

router.delete("/note/:id/comments/:commentId", deleteComment);

router.put('/note/:id/comments/:commentId', updateComment);

module.exports = router;
