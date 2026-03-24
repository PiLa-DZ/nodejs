// *** Advanced Stream Patterns ***
// *** 2. Object Mode Streams ***
// *** Streams can work with JavaScript objects instead of just strings and buffers: ***

const { Readable } = require('stream');

// Create a readable stream in object mode
const objectStream = new Readable({
  objectMode: true,
  read() {}
});
// Push objects to the stream
objectStream.push({ id: 1, name: 'Alice' });
objectStream.push({ id: 2, name: 'Bob' });
objectStream.push(null); // Signal end of stream
// Consume the stream
objectStream.on('data', (obj) => {
  console.log('Received:', obj);
});
