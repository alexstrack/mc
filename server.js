"use strict"

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/main');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(3030,function(err){
   if (err) {
       return console.log(err);
   }
   console.log('Server running on port 3030...');
});