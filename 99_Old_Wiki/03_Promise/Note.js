// *** Promise Methods ***

// Instance Methods
.then(onFulfilled, onRejected)  // Handles fulfillment or rejection
.catch(onRejected)              // Handles rejections
.finally(onFinally)             // Runs after promise settles

// Static Methods
Promise.all(iterable)           // Waits for all promises to resolve
Promise.race(iterable)          // Waits for first promise to settle
Promise.allSettled(iterable)    // Waits for all to settle

// Utility Methods
Promise.resolve(value)          // Creates a resolved promise
Promise.reject(reason)          // Creates a rejected promise


