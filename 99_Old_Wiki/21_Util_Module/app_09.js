// *** util.promisify.custom ***
// *** Symbol to customize promisification behavior. 
//     This allows you to provide a custom implementation when a function is promisified. ***
// *** Use cases for custom promisification: ***
// ***     Functions that don't follow the standard callback pattern ***
// ***     APIs that return multiple values in the callback ***
// ***     Custom error handling or transformation of results ***
// ***     Optimizing performance for specific use cases ***
// ***     Adding additional functionality during promisification ***

const util = require('util');

// Function with custom promisification
function doSomething(options, callback) {
  callback(null, 'regular result');
}

// Define custom promisification
doSomething[util.promisify.custom] = (options) => {
  return Promise.resolve('custom promisified result');
};

// Use the custom promisification
const promisified = util.promisify(doSomething);

// Compare the results
async function compareResults() {
  // Original function with callback
  doSomething({}, (err, result) => {
    console.log('Callback result:', result);
  });

  // Custom promisified function
  const customResult = await promisified({});
  console.log('Promisified result:', customResult);
}

compareResults();
