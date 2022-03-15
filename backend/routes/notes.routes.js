const {Router} = require('express');
const {getNotes} = require('../controllers/notes.controller');

const router = Router();

router.get('/', getNotes);

module.exports = router;