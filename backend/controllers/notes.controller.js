const Note = require("../models/Note");

const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log(error);
  }
};

const postNote = async (req, res) => {
  try {
    const note = new Note(req.body);
    await note.save();
    res.status(200).json(note);
  } catch (error) {
    console.log(error);
  }
};

const noteDetail = async (req, res) => {
    
    try {
        const {id} = req.params
        const note = await Note.findById(id)
        res.status(200).json(note)
    } catch (error) {
        console.log('Error: ', error)
    }
};

module.exports = {
  getNotes,
  postNote,
  noteDetail,
};
