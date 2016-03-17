var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res){
res.sendFile(path.join(__dirname + '/memory.html'));
});

app.use(express.static('photos'));

app.listen(3000);
