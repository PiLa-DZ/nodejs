// *** Buffer Methods ***
// *** buffer.toString() ***
// *** Decodes a buffer to a string using a specified encoding: ***

const buffer = Buffer.from('Hello, World!');

// Default encoding is UTF-8
console.log(buffer.toString());

// Specify encoding
console.log(buffer.toString('utf8'));

// Decode only a portion of the buffer
console.log(buffer.toString('utf8', 0, 5));

// Using different encodings
const hexBuffer = Buffer.from('48656c6c6f', 'hex');
console.log(hexBuffer.toString());

const base64Buffer = Buffer.from('SGVsbG8=', 'base64');
console.log(base64Buffer.toString());
