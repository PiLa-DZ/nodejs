// *** OS Constants and Utilities ***
// *** os.EOL ***
// *** Returns the end-of-line marker for the current operating system. ***

const os = require('os');
const fs = require('fs');

// Get the end-of-line marker for the current OS
console.log('End of Line character:', JSON.stringify(os.EOL));

// Example: Write a file with platform-specific line endings
const lines = [
  'First line',
  'Second line',
  'Third line'
];

// Join lines with the correct EOL character
const content = lines.join(os.EOL);
fs.writeFileSync('output.txt', content);
console.log('File written with platform-appropriate line endings');
