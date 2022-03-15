const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Notes Main');
})

module.exports = router;