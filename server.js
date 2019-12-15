const express = require('express');
const app = express();
const mail = require('./routes/mail'); 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api/mail', mail); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get('/', (req,res) => {
    res.send('working');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 
