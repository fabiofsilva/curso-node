var http = require('http');

var server = http.createServer(function(request, response){
	console.log(request);
	response.end('<html><body>Portal de Not&iacute;cias</body></html>');
});

server.listen(8000);