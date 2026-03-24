// *** Creating Buffers ***
// *** 3. Buffer.from() ***
// *** Creates a new Buffer from various sources like strings, arrays, or ArrayBuffer. 
//     This is the most flexible way to create buffers from existing data. ***

// Create a buffer from a string
const buffer3 = Buffer.from('Hello, World!');
console.log(buffer3);

console.log(buffer3.toString());

// Create a buffer from an array of integers
const buffer4 = Buffer.from([65, 66, 67, 68, 69]);
console.log(buffer4);

console.log(buffer4.toString());

// Create a buffer from another buffer
const buffer5 = Buffer.from(buffer4);
console.log(buffer5);
