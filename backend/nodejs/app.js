const bodyParser = require("body-parser");
const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');

const { config } = require('dotenv');
config();

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

//connect to mongodb
mongoose.connect(
    'mongodb://mongo:27017/userdb',
    { useNewUrlParser: true }
)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

const port = 4000 || process.env.PORT;

app.listen(port, () => console.log('Server running...'));