// *** Path Properties ***
// *** path.win32 ***
// *** Provides access to Windows-specific path methods, allowing you to work with Windows-style paths regardless of the operating system you're running on. ***
// *** Example: Working with Windows paths on any platform ***

const path = require('path');

// Always use Windows-style path handling
const winPath = 'C:\\Users\\user\\Documents\\file.txt';
console.log('Windows basename:', path.win32.basename(winPath));
console.log('Windows dirname:', path.win32.dirname(winPath));

// Normalize Windows paths
console.log('Normalized path:', path.win32.normalize('C:\\\\temp\\\\foo\\..\\bar\\file.txt'));

// Convert between forward and backward slashes
const mixedPath = 'C:/Users/User/Documents//file.txt';
console.log('Normalized mixed slashes:', path.win32.normalize(mixedPath));

// Working with UNC paths
const uncPath = '\\\\server\\share\\folder\\file.txt';
console.log('UNC path components:', path.win32.parse(uncPath));
