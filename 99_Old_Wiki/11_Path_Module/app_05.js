// *** Path Module Methods ***
// *** path.resolve() ***
// *** Resolves a sequence of paths or path segments into an absolute path, processing from right to left until an absolute path is constructed. ***

const path = require('path');

// 1. Resolve relative to current working directory
console.log(path.resolve('file.txt'));

// 2. Resolve with multiple segments
console.log(path.resolve('/users', 'docs', 'file.txt'));

// 3. Right-to-left processing
console.log(path.resolve('/first', '/second', 'third')); // '/second/third'

// 4. Using __dirname for module-relative paths
console.log(path.resolve(__dirname, 'config', 'app.json'));
