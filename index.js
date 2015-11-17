var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.status(200);
	res.send({ message: 'hello world' });
});

app.listen(3000);
