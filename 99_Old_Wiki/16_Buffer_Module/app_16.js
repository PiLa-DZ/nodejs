// *** Advanced Buffer Operations ***
// *** Buffer and Streams ***
// *** Buffers are commonly used with streams for efficient data processing: ***

const fs = require('fs');
const { Transform } = require('stream');

// Create a transform stream that processes data in chunks
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
   // Process each chunk (which is a Buffer)
   const processed = chunk.toString().toUpperCase();
   this.push(Buffer.from(processed));
   callback();
  }
});
// Create a read stream from a file
const readStream = fs.createReadStream('input.txt');
// Create a write stream to a file
const writeStream = fs.createWriteStream('output.txt');
// Process the file in chunks
readStream.pipe(transformStream).pipe(writeStream);
