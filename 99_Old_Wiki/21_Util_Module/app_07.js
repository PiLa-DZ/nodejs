// *** Promises and Async Utilities ***
// *** Node.js's Util module provides several utilities for working with asynchronous code, making it easier to work with both callback-based and Promise-based APIs. ***
// *** util.promisify(original) ***
// *** Converts a callback-based function following the Node.js callback pattern to a function that returns a Promise. ***
// *** This is useful for working with older Node.js APIs that use callbacks. ***
// *** When to use util.promisify: ***
// ***     Working with older Node.js APIs that use callbacks ***
// ***     Converting callback-based libraries to use Promises ***
// ***     Simplifying async/await code by removing callbacks ***
// ***     Working with functions that follow the Node.js callback pattern (error-first, single result) ***
// *** Limitations: ***
// ***     Only works with functions that follow the Node.js callback pattern: (err, value) => {} ***
// ***     Doesn't work with functions that return multiple values in the callback ***
// ***     Custom promisification may be needed for more complex APIs ***

const util = require('util');
const fs = require('fs');

// Convert fs.readFile from callback-based to Promise-based
const readFilePromise = util.promisify(fs.readFile);

// Now we can use it with async/await or Promise chaining
async function readFileExample() {
  try {
    // Using the promisified function
    const data = await readFilePromise('package.json', 'utf8');
    console.log('File content:', data.substring(0, 100) + '...');
    
    // Error handling with try/catch
    return 'File read successfully';
  } catch (err) {
    console.error('Error reading file:', err.message);
    return 'Error reading file';
  }
}

readFileExample().then(result => {
  console.log('Result:', result);
});
