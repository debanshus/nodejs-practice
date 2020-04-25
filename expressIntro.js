var express = require('express');
var app = express();

app.get("/", function (request, response) {
    console.log('GET me');
    response.send("Hello Express. Got a GET request.\n");
});

app.post("/", function (request, response) {
    console.log('POST me');
    response.send("Hello Express. Got a POST request.\n");
});

app.delete("/", function (request, response) {
    console.log('DELETE me');
    response.send("Hello Express. Got a DELETE request.\n");
});

app.put("/", function (request, response) {
    console.log('PUT me');
    response.send("Hello Express. Got a PUT request.\n");
});

app.patch("/", function (request, response) {
    console.log('PATCH me');
    response.send("Hello Express. Got a PATCH request.\n");
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Express JS app is listening to http://%s:%s", host, port);
});