const {Schema, model} = require('mongoose');
const Comments = require('./Comment');

const NoteSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    description: {
        type: String,
    },
    comments: [Comments.schema],
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Note', NoteSchema);