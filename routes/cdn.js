const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('./script.js');
});

module.exports = router;