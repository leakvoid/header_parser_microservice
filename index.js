
var express = require('express');
var app = express();

var port = 3000;

app.get('/', function (req, res) {
    console.log('test test test');
    res.end('test test test');
});

app.listen(port, function() {
    console.log('App started at port: ' + port);
});
