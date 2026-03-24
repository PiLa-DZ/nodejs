// *** Reading Files with Promises (Modern Approach) ***
// *** Using fs.promises or util.promisify for cleaner async/await syntax: ***

// Example: Reading a file with async/await
// Using fs.promises (Node.js 10.0.0+)
const fs = require('fs').promises;

async function readFileExample() {
  try {
    const data = await fs.readFile('./dir/f2.txt', 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

readFileExample();

// Or with util.promisify (Node.js 8.0.0+)
const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
  try {
    const data = await readFileAsync('./dir/f3.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readWithPromisify(); 
