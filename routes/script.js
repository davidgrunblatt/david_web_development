
// mongo setup
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dpg1919:Claptoncocaine13@cluster0.8wsvv.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log('The mongoose is out!');
});

const tires = [
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

// have all the data here. Iterate through it in the front end and render some HTML.
// Make them a simple react app hosted on Heroku in which they can login and add / remove from their inventory.
// Clients can search for tires and check whether they are in stock or not. 
// No option to purchase just yet. 
