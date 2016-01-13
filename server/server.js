/**
 * Created by user on 1/11/16.
 */
var express = require('express');
var path = require('path');
var index = require('./routes/index');

var app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use('/', index);


var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log("Listening at port:", port);
});
