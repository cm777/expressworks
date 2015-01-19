var path = require('path');
var express = require('express');
var stylus = require('stylus');

var app = express();

app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(process.argv[2]);
