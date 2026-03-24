// *** Getting Started with Assert ***
// *** Here's a quick example of using the Assert module to test a simple function: ***
// *** Basic Assertion Example ***

const assert = require('assert').strict;

// Function to test
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Inputs must be numbers');
  }
  return a + b;
}
// Test cases
assert.strictEqual(add(2, 3), 5, '2 + 3 should equal 5');
// Test error case
assert.throws(
  () => add('2', 3),
  TypeError,
  'Should throw TypeError for non-number input'
);
console.log('All tests passed!'); 
console.log(add('a', 3))
