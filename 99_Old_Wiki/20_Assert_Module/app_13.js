// *** Other Assertion Methods ***
// *** assert.fail([message]) ***
// *** Throws an AssertionError with the provided message or a default message. ***

const assert = require('assert');

try {
  // This always throws an AssertionError
  assert.fail('This test always fails');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
