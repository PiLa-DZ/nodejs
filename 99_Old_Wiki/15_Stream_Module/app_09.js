// *** Transform Streams ***
// *** Transform streams are duplex streams that can modify data as it passes through. ***
// *** They're ideal for processing data in pipelines. ***

const { Transform } = require('stream');
const fs = require('fs');

// Create a transform stream that converts text to uppercase
class UppercaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    // Transform the chunk to uppercase
    const upperChunk = chunk.toString().toUpperCase();
    // Push the transformed data
    this.push(upperChunk);
    // Signal that we're done with this chunk
    callback();
  }
}

// Create an instance of our transform stream
const uppercaseTransform = new UppercaseTransform();

// Create a readable stream from a file
const readableStream = fs.createReadStream('./dir/file.txt');

// Create a writable stream to a file
const writableStream = fs.createWriteStream('./dir/output-uppercase.txt');

// Pipe the data through our transform stream
readableStream
  .pipe(uppercaseTransform)
  .pipe(writableStream)
  .on('finish', () => {
    console.log('Transformation completed!');
  });
