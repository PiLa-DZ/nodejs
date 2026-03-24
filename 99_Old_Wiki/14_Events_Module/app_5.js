// *** Common EventEmitter Patterns ***
// *** 2. Handling Events Only Once ***

const EventEmitter = require('events');
const emitter = new EventEmitter();

// This listener will be called only once
emitter.once('connection', () => {
  console.log('First connection established');
});

emitter.emit('connection'); // This will trigger the listener
emitter.emit('connection'); // This won't trigger the listener again
