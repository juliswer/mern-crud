const {Schema, model} = require('mongoose');
const Comment = require('./Comment');

const NoteSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    desription: {
        type: String,
    },
    comments: [Comment.schema],
    done: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Note', NoteSchema);