const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
    title: {
        type: String,
    },
    desription: {
        type: String,
    },
    liked: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Comments', CommentSchema);