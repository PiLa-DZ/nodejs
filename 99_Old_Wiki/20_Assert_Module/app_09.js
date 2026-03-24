// *** Error Handling ***
// *** Testing that your code throws the expected errors is a critical part of writing robust applications. ***
// *** The Assert module provides several methods for this purpose. ***
// *** assert.doesNotThrow(fn[, error][, message]) ***
// *** Expects the function fn to not throw an error. If it does, the error is propagated. ***

const assert = require('assert');

// This will pass
assert.doesNotThrow(() => {
  return 'no error';
});

try {
  // This will throw the original error
  assert.doesNotThrow(() => {
    throw new Error('This will be thrown');
  }, 'Unexpected error');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
