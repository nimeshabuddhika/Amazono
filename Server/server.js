const express = require('express'); //Web framework to create http routes
const morgan = require('morgan');  //Middle ware to log http request
const bodyParser = require('body-parser'); //data reader, NodeJs can not communicate with front end data
const mongoose = require('mongoose'); //data base connector of  mongodb

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(morgan('dev'));

app.listen(3030, (err) => {
    console.log('Server started...');
})