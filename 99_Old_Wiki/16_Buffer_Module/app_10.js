// *** Buffer Methods ***
// *** buffer.slice() ***
// *** Creates a new buffer that references the same memory as the original, but with offset and cropped to the given end: ***

const buffer = Buffer.from('Hello, World!');

// Create a slice from position 7 to the end
const slice = buffer.slice(7);
console.log(slice.toString());

// Create a slice from position 0 to 5
const slice2 = buffer.slice(0, 5);
console.log(slice2.toString());

// Important: slices share memory with original buffer
slice[0] = 119; // ASCII for 'w' (lowercase)
console.log(slice.toString());
console.log(buffer.toString());
