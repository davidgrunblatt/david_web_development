const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const compression = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const mail = require('./routes/mail'); 

app.use(cors());
app.use(helmet());
app.use(compression()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use('/api/mail', mail); 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`listening on port ${PORT}`)); 
