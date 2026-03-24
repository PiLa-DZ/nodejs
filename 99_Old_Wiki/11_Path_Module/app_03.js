// *** Path Module Methods ***
// *** path.extname() ***
// *** Returns the extension of a path, from the last occurrence of the . character to the end of the string. ***

const path = require('path');

const extension = path.extname('file.txt');
console.log(extension);

console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('.index'));
