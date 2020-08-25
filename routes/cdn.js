const express = require('express');
const router = express.Router();

const dummy_data = [
        {
            id: 0,
            name: 'Michelin',
            size: '20e',
            inStock: true
        },
        {
            id: 1,
            name: 'BridgeStone',
            size: '20e',
            inStock: true
        },
        {
            id: 2,
            name: 'Firestone',
            size: '50e',
            inStock: false
        },
        {
            id: 2,
            name: 'Victory',
            size: '50e',
            inStock: false
        }
    ];

router.get('/', (req, res) => {
    res.send(dummy_data);
});

module.exports = router;