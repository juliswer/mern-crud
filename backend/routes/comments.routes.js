const { Router } = require("express");
const {
  getComments,
  detailComment,
  postComment,
  deleteComment,
  updateComment,
  likedComment
} = require("../controllers/comments.controller");

const router = Router();

router.get("/note/:id/comments", getComments);

router.get('/note/:id/comments/:commentId', detailComment);

router.post("/note/:id/comments", postComment);

router.delete("/note/:id/comments/:commentId", deleteComment);

router.put('/note/:id/comments/:commentId', updateComment);

router.put('/note/:id/comments/:commentId/toggleLike', likedComment);

module.exports = router;
