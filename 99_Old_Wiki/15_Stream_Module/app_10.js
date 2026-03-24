// *** The stream.pipeline() Method ***
// *** The pipeline() function (available since Node.js v10.0.0) is a more 
//     robust way to pipe streams together, especially for error handling. ***

const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

// Create a pipeline that handles errors properly
pipeline(
  fs.createReadStream('./dir/file.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./dir/destination.txt.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed:', err);
    } else {
      console.log('Pipeline succeeded!');
    }
  }
);
