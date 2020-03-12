var fs = require('fs');
var readStream = fs.createReadStream('file1.txt')

var data = '';
readStream.on('data',function(chunk){
 console.log('event - data is called');
 data = data + chunk;
});

readStream.on('end',function(){
 console.log('event - end is called');
 console.log(data);
});

readStream.on('error', function(error){
 console.log(error.stack);
});

console.log('end of code');
