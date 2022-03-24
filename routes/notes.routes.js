const { Router } = require("express");
const {
  getNotes,
  postNote,
  noteDetail,
  updateNote,
  deleteNote,
  toggleDone
} = require("../controllers/notes.controller");

const router = Router();

router.get("/", getNotes);

router.post("/notes/new", postNote);

router.get("/note/:id", noteDetail);

router.put("/note/:id", updateNote);

router.delete("/note/:id", deleteNote);

router.put('/note/:id/toggleDone', toggleDone)

module.exports = router;
