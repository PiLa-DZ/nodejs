// *** Writable Streams ***
// *** Writable streams let you write data to a destination. Examples include: ***
// ***  // Writing to a file ***
// ***  // HTTP requests on the client ***
// ***  // HTTP responses on the server ***
// ***  // process.stdout ***
// *** Creating a Writable Stream ***

const fs = require('fs');

// Create a writable stream to a file
const writableStream = fs.createWriteStream('./dir/output.txt');

// Write data to the stream
writableStream.write('Hello, ');
writableStream.write('World!');
writableStream.write('\nWriting to a stream is easy!');

// End the stream
writableStream.end();

// Events for writable streams
writableStream.on('finish', () => {
  console.log('All data has been written to the file.');
});

writableStream.on('error', (err) => {
  console.error('Error writing to stream:', err);
});
