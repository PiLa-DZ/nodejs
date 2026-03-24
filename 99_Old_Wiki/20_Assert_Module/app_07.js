// *** Deep Inequality ***
// *** assert.notDeepEqual(actual, expected[, message]) ***
// *** Tests for deep inequality with loose inequality. ***
// *** assert.notDeepStrictEqual(actual, expected[, message]) ***
// *** Tests for deep inequality with strict inequality. ***

const assert = require('assert');

const obj1 = { a:  1 , b:  2  };
const obj2 = { a:  1 , b:  3  };
const obj3 = { a: '1', b: '2' };

// These will pass
assert.notDeepEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);

try {
  // This will throw an error (loose equality)
  assert.notDeepEqual(obj1, obj3, 'obj1 is loosely deep-equal to obj3');
} catch (err) {
  console.error(`Error: ${err.message}`);
}
