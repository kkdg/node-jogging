var http = require('http');

var server = http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hi World\n');
});

server.listen(1337, '127.0.0.1');

console.log('Server runs successfully');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/',function( req, res ) {
	res.setHeader('Content-Type', 'text/plain');
	res.write('you posted: \n')
	res.end(JSON.stringify(req.body, null, 2));
});
