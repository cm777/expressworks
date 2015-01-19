var path = require('path');
var express = require('express');
var app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(process.argv[2]);
