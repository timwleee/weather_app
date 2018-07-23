const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));

mongoose.connect('mongodb://localhost/weather_app');
require('./server/config/mongoose.js');
var routes_setter = require('./server/config/routes.js');


app.listen(8000, function() {
    console.log('Weather API up and running!');
})