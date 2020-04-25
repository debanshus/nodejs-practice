var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({ extended: false });

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.post('/process', urlParser, function (request, response) {
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    console.log('Hello %s %s', firstName, lastName);
    response.send('Hello ' + firstName + ' ' + lastName);
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Express JS app is listening to http://%s:%s", host, port);
});