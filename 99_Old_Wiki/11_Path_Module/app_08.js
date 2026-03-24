// *** Path Module Methods ***
// *** path.normalize() ***
// *** Normalizes the given path, resolving .. and . segments and removing redundant separators. ***

const path = require('path');

// Resolve relative navigation
console.log(path.normalize('/users/./docs/../data/file.txt')); // '/users/data/file.txt'

// Handle multiple consecutive slashes
console.log(path.normalize('/users//docs////file.txt')); // '/users/docs/file.txt'

// Windows-style paths (automatically handled)
console.log(path.normalize('C:\\users\\docs\\..\\file.txt')); // 'C:\\users\\file.txt'

// Edge cases console.log(path.normalize('')); // '.'
console.log(path.normalize('.')); // '.'
console.log(path.normalize('..')); // '..'
console.log(path.normalize('/..')); // '/'
