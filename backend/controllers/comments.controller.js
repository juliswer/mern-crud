const Comment = require('../models/Comment');

const getComments = async (req, res) => {
    res.json({
        message: 'Comments'
    })
}

module.exports = {
    getComments
}