var http = require("http");

var PORT = 8080;

//generic for handling requests
function handleRequest(request,response) {
	response.end("It works on path " + request.url);
}
var server = http.createServer(handleRequest);

server.listen(PORT,function() {
	console.log("Server is listening on http://localhost:%s",PORT)
})