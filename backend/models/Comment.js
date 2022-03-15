const {Schema, model} = require('mongoose');

const CommentSchema = new Schema({
    title: {
        type: String,
    },
    description: {
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