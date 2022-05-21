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

const phoneRoutes = require('./routes/phones.routes');
app.use('/phones', phoneRoutes)

app.listen(process.env.port, () => {
    console.log('listening on port 3000');
  });