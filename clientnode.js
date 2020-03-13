var http = require('http');

// Options to be used by request
var options = {
    host: 'localhost',
    port: '8080',
    path: '/this/path/will/be/printed-in-the body'
};

// Make a request to the server
var request = http.request(options, function(response) {
    // Continuously update stream with data
    var body = '';
    response.on('data', function(data) {
        body += data;
    });

    // Data received completely.
    response.on('end', function() {
        console.log(body);
    });
});

request.end();

console.log("End of code")

