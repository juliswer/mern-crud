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
    const { id } = req.params;
    const note = await Note.findById(id);
    res.status(200).json(note);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error: ", error);
  }
};

const deleteNote = async (req, res) => {
    try {
        const {id} = req.params;

        const deletedNote = await Note.findByIdAndDelete(id);

        res.status(200).json(deletedNote);

    } catch (error) {
        console.log(error)
    }
};

const toggleDone = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findById(id);
  
    note.done = !note.done;
  
    note.save();

    res.status(200).send('Done toggled');
  } catch (error) {
    console.log('Error: ', error)
  }
}

module.exports = {
  getNotes,
  postNote,
  noteDetail,
  updateNote,
  deleteNote,
  toggleDone
};
