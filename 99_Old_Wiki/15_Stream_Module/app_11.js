// *** Object Mode Streams ***
// *** By default, streams work with strings and Buffer objects. ***
// *** However, streams can be set to 'object mode' to work with JavaScript objects. ***

const { Readable, Writable, Transform } = require('stream');

// Create a readable stream in object mode
const objectReadable = new Readable({
  objectMode: true,
  read() {} // Implementation required but can be no-op
});

// Create a transform stream in object mode
const objectTransform = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    // Add a property to the object
    chunk.transformed = true;
    chunk.timestamp = new Date();
    this.push(chunk);
    callback();
  } });

// Create a writable stream in object mode
const objectWritable = new Writable({
  objectMode: true,
  write(chunk, encoding, callback) {
    console.log('Received object:', chunk);
    callback();
  } });

// Connect the streams
objectReadable
  .pipe(objectTransform)
  .pipe(objectWritable);

// Push some objects to the stream
objectReadable.push({ name: 'Object 1', value: 10 });
objectReadable.push({ name: 'Object 2', value: 20 });
objectReadable.push({ name: 'Object 3', value: 30 });
objectReadable.push(null); // Signal the end of data
