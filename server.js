//Dependencies
let express = require('express');
let mongoose = require('mongoose');
let bodeyParser = require('body-parser');
let homeRoute = require('./api/routes/homeRoute');
let apiRoute = require('./api/routes/apiRoute');
let config = require('./config');

//Define PORT number
let port = process.env.PORT || 3001;

//Connect DATABASE
mongoose.connect(config.DATABASE_URI);

//Initialize express app
let app = express();

//Use Body Parser middleware for POST requests
app.use(bodeyParser.urlencoded({extended: false}));
app.use(bodeyParser.json());

//Define routes
app.use('/', homeRoute);
app.use('/api', apiRoute);

//Listen for http requests
app.listen(port, () => {
  console.log('Magic happens at port '+port);
})