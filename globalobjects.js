console.log('current file name: '+ __filename);

console.log('current directory name: '+ __dirname);

console.log('"Hello Node" will be printed after 2 seconds');
setTimeout(function(){
 console.log("Hello Node");
},2000);

setInterval(function(){
 console.log("Hello Node with an interval of 2 seconds.");
},2000);
