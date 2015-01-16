var
express = require('express'),
app     = express(),
http    = require('http').Server(app);

app.get('/', function(req, res){
	res.send('wow! such server! very listening!');
});

http.listen(4040, function(){
	console.log('Chat server listening on *:4040');
});

