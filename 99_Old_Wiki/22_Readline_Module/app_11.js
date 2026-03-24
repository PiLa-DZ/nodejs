// *** Reading a File Line by Line ***
// *** Besides interactive input, the Readline module can also read files line by line, which is useful for processing large text files efficiently: ***

const fs = require('fs');
const readline = require('readline');

// Create a readable stream for the file
const fileStream = fs.createReadStream('./dir/file.txt');

// Create the readline interface
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity // Recognize all instances of CR LF as a single line break
});

// Counter for line numbers
let lineNumber = 0;

// Process file line by line
rl.on('line', (line) => {
  lineNumber++;
  console.log(`Line ${lineNumber}: ${line}`);
});

// Handle end of file
rl.on('close', () => {
  console.log(`Finished reading file with ${lineNumber} lines.`);
});

