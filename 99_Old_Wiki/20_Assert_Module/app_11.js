// *** Testing Asynchronous Code ***
// *** Modern JavaScript makes heavy use of asynchronous patterns. ***
// *** The Assert module provides utilities for testing both Promise-based and callback-based asynchronous code. ***
// *** assert.doesNotReject(asyncFn[, error][, message]) ***
// *** Awaits the asyncFn promise or async function and expects it to fulfill. ***

const assert = require('assert');

async function asyncTest() {
  // This will pass
  await assert.doesNotReject(
    Promise.resolve('success')
  );

  // This will also pass
  await assert.doesNotReject(
    async () => {
      return 'async function success';
    }
  );

  try {
    // This will throw the original rejection reason
    await assert.doesNotReject(
      Promise.reject(new Error('Failure')),
      'Expected promise to fulfill'
    );
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
}

// Run the async test
asyncTest().catch(err => console.error(`Unhandled error: ${err.message}`));
