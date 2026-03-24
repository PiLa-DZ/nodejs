// *** Reading from Buffers ***
// *** You can read data from a buffer using various methods: ***

// Create a buffer from a string
const buffer = Buffer.from('Hello, Node.js!');

// Read the entire buffer as a string
console.log(buffer.toString());

// Read a portion of the buffer (start at position 7, end before position 11)
console.log(buffer.toString('utf8', 7, 11));

// Read a single byte
console.log(buffer[0]);

// Convert the ASCII code to a character
console.log(String.fromCharCode(buffer[0]));
