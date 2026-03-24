// *** Handling Backpressure ***
// *** When writing to a stream, if the data is being written faster than it can be processed, backpressure occurs. ***
// *** The write() method returns a boolean indicating if it's safe to continue writing. ***

const fs = require('fs');

const writableStream = fs.createWriteStream('./dir/output.txt');

function writeData() {
  let i = 100;
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // Last time, close the stream
        writableStream.write('Last chunk!\n');
        writableStream.end();
      } else {
        // Continue writing data
        const data = `Data chunk ${i}\n`;
        // Write and check if we should continue
        ok = writableStream.write(data); // this return true
      }
    }
    while (i > 0 && ok);

    if (i > 0) {
      // We need to wait for the drain event before writing more
      writableStream.once('drain', write);
    }
  }
  write();
}

writeData();
writableStream.on('finish', () => {
  console.log('All data written successfully.');
});
