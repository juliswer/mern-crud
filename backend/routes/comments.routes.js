const { Router } = require("express");
const { getComments } = require("../controllers/comments.controller");

const router = Router();

router.get("/note/:id/comments", getComments);
