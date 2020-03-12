var fs = require('fs');
var readStream = fs.createReadStream('file1.txt');
var writeStream = fs.createWriteStream('file3.txt');

readStream.pipe(writeStream);

writeStream.on('finish', function(){
 console.log('file1.txt copied to file3.txt');
});

console.log('end of code');
