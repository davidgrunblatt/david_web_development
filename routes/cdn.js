const express = require('express');
const router = express.Router();

const tires = require('./script');

router.get('/', (req, res) => {
    res.send(tires);
});

module.exports = router;