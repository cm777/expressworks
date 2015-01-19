var express = require('express');

var app = express();

function search (req, res, next) {
	req.search = req.query;
	next();
}

app.get('/search', search, function (req, res) {
	res.send(req.search);
});

app.listen(3000);
