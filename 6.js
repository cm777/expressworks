var express = require('express');
var app = express();

function sha1 (req, res, next) {
	var id = req.params.id;

	var sha = require('crypto')
		.createHash('sha1')
		.update(new Date().toDateString() + id)
		.digest('hex');

	req.sha = sha;

	next();
}

app.put('/message/:id', sha1, function (req, res) {
	res.send(req.sha);
});

app.listen(3000);
