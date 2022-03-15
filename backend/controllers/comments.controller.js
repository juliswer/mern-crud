const Comment = require('../models/Comment');

const getComments = async (req, res) => {
    try {
        res.json({
            message: 'Comments'
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getComments
}