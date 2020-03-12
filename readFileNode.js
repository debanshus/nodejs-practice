var fs = require('fs');

fs.readFile('file1.txt', function(err, data){
 if (err){
  console.log(err.stack);
  return;	
 }
 console.log(data.toString());
});

console.log('end of code');
