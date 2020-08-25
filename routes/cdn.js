const express = require('express');
const router = express.Router();

const tires = require('./script');

router.get('/', (req, res) => {
    res.send(JSON.stringify(tires));
});

module.exports = router;