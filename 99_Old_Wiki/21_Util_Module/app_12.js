// *** Deprecation Utilities ***
// *** Node.js provides utilities to help manage API deprecations, making it easier to evolve your codebase while maintaining backward compatibility. ***
// *** Deprecation Strategy: ***
// ***     Mark deprecated functions with util.deprecate() ***
// ***     Provide clear migration instructions in the deprecation message ***
// ***     Include a deprecation code for easier tracking ***
// ***     Document the deprecation in your API docs ***
// ***     Remove deprecated functionality in a future major version ***
// *** util.deprecate(fn, msg[, code]) ***
// *** Marks a function as deprecated, issuing a warning when it's called. ***

const util = require('util');

// Original function
function oldFunction(x, y) {
  return x + y;
}

// Deprecate the function
const deprecatedFunction = util.deprecate(
  oldFunction,
  'oldFunction() is deprecated. Use newFunction() instead.',
  'DEP0001'
);

// New function
function newFunction(x, y) {
  return x + y;
}

// Using the deprecated function will show a warning
console.log('Result:', deprecatedFunction(5, 10));

// Using the new function
console.log('Result:', newFunction(5, 10)); 
