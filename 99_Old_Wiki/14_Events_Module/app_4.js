// *** Common EventEmitter Patterns ***
// *** 1. Passing Arguments to Event Handlers ***

const EventEmitter = require('events');
const emitter = new EventEmitter();

// Emit event with arguments
emitter.on('userJoined', (username, userId) => {
  console.log(`${username} (${userId}) has joined the chat`);
});

emitter.emit('userJoined', 'JohnDoe', 42);
// Outputs: JohnDoe (42) has joined the chat
