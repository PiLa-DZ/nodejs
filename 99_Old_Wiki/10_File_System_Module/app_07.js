// *** Creating and Writing Files ***
// *** Creates a new file or overwrites an existing file with the specified content: ***
// *** 4. Using Streams for Large Files ***

// *** For writing large amounts of data, use streams to avoid high memory usage: ***
// *** Example: Writing large files with streams ***

const fs = require('fs');
const { pipeline } = require('stream/promises');
const { Readable } = require('stream');

async function writeLargeFile() {
  // Create a readable stream (could be from HTTP request, etc.)
  const data = Array(1000).fill().map((_, i) => `Line ${i + 1}: ${'x'.repeat(100)}\n`);
  const readable = Readable.from(data);

  // Create a writable stream to a file
  const writable = fs.createWriteStream('./dir/large-file.txt');

  try {
    // Pipe the data from readable to writable
    await pipeline(readable, writable);
    console.log('Large file written successfully');
  } catch (err) {
    console.error('Error writing file:', err);
  }
}

writeLargeFile();
