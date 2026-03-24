// *** Reading a file synchronously ***

const fs = require('fs');

try {
  const data = fs.readFileSync('myfile.txt', 'utf8');
  console.log('File content:', data);
} 
catch (err) {
  console.error('Error reading file:', err);
}

