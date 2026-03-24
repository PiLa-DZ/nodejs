// *** Path Module Methods ***
// *** path.join() ***
// *** Joins all given path segments together using the platform-specific separator as a delimiter, then normalizes the resulting path. ***

const path = require('path');

// Join path segments
const fullPath = path.join('/users', 'docs', 'file.txt');
console.log(fullPath); // Output depends on OS

// Handle relative paths and navigation
console.log(path.join('/users', '../system', './logs', 'file.txt'));

// Handle multiple slashes
console.log(path.join('users', '//docs', 'file.txt')); // Normalizes slashes
