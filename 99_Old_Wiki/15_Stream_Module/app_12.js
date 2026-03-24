// *** Advanced Stream Patterns ***
// *** 1. Error Handling with pipeline() ***
// *** The pipeline() method is the recommended way to handle errors in stream chains: ***

const { pipeline } = require('stream');
const fs = require('fs');
const zlib = require('zlib');

pipeline(
  fs.createReadStream('./dir/file.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./dir/output2.txt.gz'),
  (err) => {
   if (err) {
    console.error('Pipeline failed:', err);
   } else {
    console.log('Pipeline succeeded');
   }
  }
);
