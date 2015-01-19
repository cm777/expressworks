var path = require('path');
var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, './'));

app.get('/home', function (req, res) {
	res.render('2', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
