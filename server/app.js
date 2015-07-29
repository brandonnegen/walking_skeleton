var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var index = require('./routes/index');

var server = app.listen(3000, function(){

    var port = server.address().port;
    console.log("Listening on port: ", port);
});

app.use(bodyParser.json());
app.use('/', index);
module.exports = app;
