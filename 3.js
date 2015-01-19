var express = require('express');
var bodyparser = require('body-parser');

var app = express();

function logger (req, res, next) {
	console.log('this is a msg!');
	next();
}

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', logger, function (req, res) {
	var reversed = req.body.str.split('').reverse().join('');
	res.send(reversed);
});

app.listen(process.argv[2]);
