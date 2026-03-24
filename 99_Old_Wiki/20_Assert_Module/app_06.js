// *** Inequality and Negation ***
// *** Just as important as checking for equality is verifying that values are not equal when they shouldn't be. ***
// *** assert.notEqual(actual, expected[, message]) ***
// *** Tests shallow, coercive inequality using the inequality operator (!=). ***
// *** assert.notStrictEqual(actual, expected[, message]) ***
// *** Tests strict inequality using the strict inequality operator (!==). ***

const assert = require('assert');

// These will pass
assert.notEqual(1, 2);
assert.notStrictEqual('1', 1);

try {
  // This will throw an error
  assert.notEqual(1, '1', '1 is coercively equal to "1"');
} catch (err) {
  console.error(`Error: ${err.message}`);
}

try {
  // This will throw an error
  assert.notStrictEqual(1, 1, '1 is strictly equal to 1');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
