const express = require('express');         //Web framework to create http routes
const morgan = require('morgan');           //Middle ware to log http request
const bodyParser = require('body-parser');  //data reader, NodeJs can not communicate with front end data
const mongoose = require('mongoose');       //data base connector of  mongodb
const cors = require('cors');               //CORS is needed for communicating frontend and backend and it is a middleware

const app = express();

const config = require('./config');

mongoose.connect(config.database, (err) =>{
    if(err){
        console.log(err)
    }else{
        console.log('Connected to database')
    }
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(morgan('dev'));
app.use(cors())

app.get('/',(req,res,next) => {
    res.json({
        'user':'Nimesha'
    });
})

app.listen(3030, (err) => {
    console.log('Server started...');
})
