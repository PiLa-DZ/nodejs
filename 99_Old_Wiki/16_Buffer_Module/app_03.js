// *** Creating Buffers ***
// *** 2. Buffer.allocUnsafe() ***
// *** Creates a new Buffer of the specified size, but doesn't initialize the memory. ***
// *** This is faster than Buffer.alloc() but may contain old or sensitive data. ***
// *** Always fill the buffer before use if security is a concern. ***

// Create an uninitialized buffer of 10 bytes
const buffer2 = Buffer.allocUnsafe(10);
console.log(buffer2);
// Output:
// <Buffer 00 00 00 00 00 00 00 00 00 00>

// Fill the buffer with zeros for security
buffer2.fill(0);
console.log(buffer2);
// Output:
// <Buffer 00 00 00 00 00 00 00 00 00 00>
