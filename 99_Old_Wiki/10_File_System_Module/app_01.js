// *** Reading Files with Callbacks ***

const fs = require('fs');

// Read file asynchronously with callback
fs.readFile('./dir/f1.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// For binary data (like images), omit the encoding
fs.readFile('./dir/f1.txt', (err, data) => {
  if (err) throw err;
  // data is a Buffer containing the file content
  console.log('Image size:', data.length, 'bytes');
});
