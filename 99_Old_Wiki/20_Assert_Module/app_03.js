// *** Value Comparison ***
// *** The Assert module provides multiple ways to compare values, each with different behaviors regarding type coercion and object comparison. ***
// *** assert.equal(actual, expected[, message]) ***
// *** Tests shallow, coercive equality between the actual and expected parameters using the equality operator (==). ***

const assert = require('assert');

// These will pass (coercive equality)
assert.equal(1, 1);
assert.equal('1', 1); // String is coerced to number
assert.equal(true, 1); // Boolean is coerced to number

try {
  // This will throw an error
  assert.equal(1, 2, '1 is not equal to 2');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
