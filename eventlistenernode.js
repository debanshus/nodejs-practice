var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function(err,data){
 console.log('listener1 listening to event1');
}
eventEmitter.addListener('event1',listener1);


var listener2 = function(err, data){
 console.log('listener2 listening to event1');
}
eventEmitter.on('event1',listener2);

eventEmitter.emit('event1');

var listenerCount = events.EventEmitter.listenerCount(eventEmitter, 'event1');
console.log('total no. of listeners to event1: ' + listenerCount);

eventEmitter.removeListener('event1', listener1);
console.log('removed one eventListener from even1');

var listenerCount = events.EventEmitter.listenerCount(eventEmitter, 'event1');
console.log('total no. of listeners to event1: ' + listenerCount);

eventEmitter.emit('event1');

console.log('end of code');
