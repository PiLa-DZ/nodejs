// *** Value Comparison ***
// *** The Assert module provides multiple ways to compare values, each with different behaviors regarding type coercion and object comparison. ***
// *** assert.strictEqual(actual, expected[, message]) ***
// *** Tests strict equality between the actual and expected parameters using the strict equality operator (===). ***

const assert = require('assert');

// This will pass
assert.strictEqual(1, 1);

try {
  // These will throw errors (strict equality)
  assert.strictEqual('1', 1, 'String "1" is not strictly equal to number 1');
  assert.strictEqual(true, 1, 'true is not strictly equal to 1');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
