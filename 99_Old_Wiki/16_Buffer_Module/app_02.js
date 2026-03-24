// *** Creating Buffers ***
// *** 1. Buffer.alloc() ***
// *** Creates a new Buffer of the specified size, initialized with zeros. ***
// *** This is the safest way to create a new buffer as it ensures no old data is present. ***

// Create a buffer of 10 bytes filled with zeros
const buffer1 = Buffer.alloc(10);
console.log(buffer1);
// Output:
// <Buffer 00 00 00 00 00 00 00 00 00 00>
