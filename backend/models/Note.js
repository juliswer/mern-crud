const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    desription: {
        type: String,
    },
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Note', NoteSchema);