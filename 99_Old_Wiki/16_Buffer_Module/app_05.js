// *** Using Buffers ***
// *** Writing to Buffers ***
// *** You can write data to a buffer using various methods: ***

// Create an empty buffer
const buffer = Buffer.alloc(10);

// Write a string to the buffer
buffer.write('Hello');
console.log(buffer);

console.log(buffer.toString());

// Write bytes at specific positions
buffer[5] = 44; // ASCII for ','
buffer[6] = 32; // ASCII for space
buffer.write('Node', 7);
console.log(buffer.toString());
