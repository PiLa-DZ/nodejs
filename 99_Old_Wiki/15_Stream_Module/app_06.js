// *** Pipe ***
// *** The pipe() method connects a readable stream to a writable stream,
//     automatically managing the flow of data and handling backpressure. ***
// *** It's the easiest way to consume streams. ***

const fs = require('fs');

// Create readable and writable streams
const readableStream = fs.createReadStream('./dir/source.txt');
const writableStream = fs.createWriteStream('./dir/destination.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle completion and errors
readableStream.on('error', (err) => {
  console.error('Read error:', err);
});

writableStream.on('error', (err) => {
  console.error('Write error:', err);
});

writableStream.on('finish', () => {
  console.log('File copy completed!');
});
