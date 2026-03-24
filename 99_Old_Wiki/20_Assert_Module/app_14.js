// *** Strict Mode ***
// *** Node.js provides a strict mode for assertions which uses strict equality for all comparisons. ***
// *** It's recommended to use strict mode for more predictable results. ***

// Import the strict version of assert
const assert = require('assert').strict;

// These are equivalent
assert.strictEqual(1, 1);
assert.equal(1, 1); // In strict mode, this is the same as strictEqual

// These are equivalent
assert.deepStrictEqual({ a: 1 }, { a: 1 });
assert.deepEqual({ a: 1 }, { a: 1 }); // In strict mode, this is the same as deepStrictEqual

try {
  // This will throw an error in strict mode
  assert.equal('1', 1);
} catch (err) {
  console.error(`Error: ${err.message}`);
}
