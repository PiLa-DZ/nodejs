// *** Core Assertion Methods ***
// *** The Assert module provides several methods for making assertions about values in your code. ***
// *** These methods form the foundation of testing with the Assert module. ***
// *** assert(value[, message]) ***
// *** Tests if a value is truthy. If the value is falsy, an AssertionError is thrown. ***

const assert = require('assert');

// This will pass
assert(true);
assert(1);
assert('string');
assert({});

try {
  // This will throw an AssertionError
  assert(false, 'This value is not truthy');
} catch (err) {
  console.error(`Error: ${err.message}`);
}

try {
  // These will also throw errors
  assert(0);
  assert('');
  assert(null);
  assert(undefined);
} catch (err) {
  console.error(`Error: ${err.message}`);
}
