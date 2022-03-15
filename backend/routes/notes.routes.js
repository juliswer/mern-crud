const { Router } = require("express");
const { getNotes, postNote } = require("../controllers/notes.controller");

const router = Router();

router.get("/", getNotes);

router.post("/notes/new", postNote);

module.exports = router;
