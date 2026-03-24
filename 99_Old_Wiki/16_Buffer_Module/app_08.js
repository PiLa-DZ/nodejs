// *** Buffer Methods ***
// *** Buffer.compare() ***
// *** Compares two buffers and returns a number indicating whether the first one comes before, after, or is the same as the second one in sort order: ***

const buffer1 = Buffer.from('ABC');
const buffer2 = Buffer.from('BCD');
const buffer3 = Buffer.from('ABC');

console.log(Buffer.compare(buffer1, buffer2));
console.log(Buffer.compare(buffer2, buffer1));
console.log(Buffer.compare(buffer1, buffer3));
