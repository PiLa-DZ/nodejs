// *** Getting Started with Buffers ***
// *** Buffers in Node.js are used to handle binary data directly. ***
// *** They are similar to arrays of integers but are fixed in size and represent raw memory allocations outside the V8 heap. ***
// *** Basic Buffer Example ***

// Create a buffer from a string
const buf = Buffer.from('Hello, Node.js!');

console.log(buf) // Output: <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73 21>

// Buffers can be converted to strings
console.log(buf.toString()); // 'Hello, Node.js!'

// Access individual bytes
console.log(buf[0]); // 72 (ASCII for 'H')

// Buffers have a fixed length
console.log(buf.length); // 15
