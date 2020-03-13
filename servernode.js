var http = require('http');
var url = require('url')

var server = http.createServer(function(request, response){
   var path = url.parse(request.url).pathname;
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write("Path is: "+ path);
   response.end();
});

server.listen(8080, "localhost", function(){
    console.log("Node server is running!");
});

console.log("End of code");