const express = require('express');
const app = express();
const mail = require('./routes/mail'); 
const cdn = require('./routes/cdn'); 
const PORT = process.env.PORT || 3001;
const compression = require('compression');
const helmet = require('helmet');

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(helmet());
app.use(compression()); 
app.use('/api/mail', mail); 
app.use('/api/cdn', cdn); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 
