var
express = require('express'),
app     = express(),
http    = require('http').Server(app),
path    = require('path');
io      = require('socket.io')(http);

io.on('connection', function(socket){
	console.log('A user has connected.')

	io.on('disconnect', function(socket){
		console.log('A user has disconnected.')
	});
});

app.use(express.static(path.join( path.dirname(), './www/')));

app.get('/', function(req, res){
	res.send('wow! such server! very listening!');
	res.sendFile('index.html');
});

http.listen(4040, function(){
	console.log('Chat server listening on *:4040');
});

