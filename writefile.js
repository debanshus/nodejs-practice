var fs = require('fs');
var data = "Hello Node. Sample text to be written in file."
var writeStream = fs.createWriteStream('file2.txt');

writeStream.write(data);
writeStream.end();

writeStream.on('finish', function(){
 console.log('event - finish is called');
 console.log('file writing completed');
});

writeStream.on('error', function(error){
 console.log(error.stack);
});

console.log('end of code');
