const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
 
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const phoneData = require('./data/phones.json');

const phoneRoutes = require('./routes/phones.routes');
 app.use('/phones', phoneRoutes) 

/* app.get('/phones', (req, res) => {
  res.send(phoneData)
})

app.get('/phones/:id', (req, res) => {
  res.send(phoneData)
})
 */
app.listen(process.env.PORT || 3000, () => {
    console.log('listening on port 3000');
  });