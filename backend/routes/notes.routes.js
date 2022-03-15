const { Router } = require("express");
const { getNotes, postNote, noteDetail } = require("../controllers/notes.controller");

const router = Router();

router.get("/", getNotes);

router.post("/notes/new", postNote);

router.get('/note/:id', noteDetail)

module.exports = router;
