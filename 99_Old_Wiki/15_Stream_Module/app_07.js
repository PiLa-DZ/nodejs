// *** Chaining Pipes ***
// *** You can chain multiple streams together using pipe(). ***
// *** This is especially useful when working with transform streams. ***

const fs = require('fs');
const zlib = require('zlib');

// Create a pipeline to read a file, compress it, and write to a new file
fs.createReadStream('./dir/source.txt')
  .pipe(zlib.createGzip()) // Compress the data
  .pipe(fs.createWriteStream('./dir/source.txt.gz'))
  .on('finish', () => {
    console.log('File compressed successfully!');
  });
