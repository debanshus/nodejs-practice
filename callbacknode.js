var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('firstEvent', function(err, data){
 console.log('first event called');

 eventEmitter.emit('secondEvent');
});

eventEmitter.on('secondEvent',function(err, data){
 console.log('second event called')
});

eventEmitter.emit('firstEvent');

console.log('end of code');

