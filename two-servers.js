var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;



var goodArray = ['You are good enough, smart enough and people like you.', 'You are like a basket of puppies.', 'The day only gets brighter with you.'];

var badArray = ['The one common denomenator to all your failed relationships is you.', 'Your mother is a hamster and yourfather smells of elderberries.', 'You only serve as an example to others.'];

var rand = goodArray[Math.floor(Math.random() * goodArray.length)]; 

var rand2 = badArray[Math.floor(Math.random() * badArray.length)];      

//generic for handling requests
function handleRequestGood(request,response) {
	response.end(rand + request.url);
}
var server = http.createServer(handleRequestGood);

server.listen(PORT1,function() {
	console.log("Server is listening on http://localhost:%s",PORT1)
})

function handleRequestBad(request,response) {
	response.end( rand2 + request.url);
}
var server = http.createServer(handleRequestBad);

server.listen(PORT2,function() {
	console.log("Server is listening on http://localhost:%s",PORT2)
})



