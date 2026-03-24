// *** Iterating Through Buffers ***
// *** Buffers can be iterated like arrays: ***

// Create a buffer from a string
const buffer = Buffer.from('Hello');

// Iterate using for...of loop
for (const byte of buffer) {
  console.log(byte);
}

// Iterate using forEach
buffer.forEach((byte, index) => {
  console.log(`Byte at position ${index}: ${byte}`);
})
