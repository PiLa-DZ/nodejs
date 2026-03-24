// *** Common EventEmitter Patterns ***
// *** 3. Error Handling ***

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Always handle 'error' events
emitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// This will trigger the error handler
emitter.emit('error', new Error('Something went wrong'));
