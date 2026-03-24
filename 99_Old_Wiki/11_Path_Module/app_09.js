// *** Path Module Methods ***
// *** path.relative() ***
// *** Returns the relative path from the first path to the second path, or an empty string if the paths are the same. ***

const path = require('path');

// Basic relative path
console.log(path.relative('/users/docs/file.txt', '/users/images/photo.jpg'));
// Output: '../../images/photo.jpg'

// Same directory
console.log(path.relative('/users/docs/file1.txt', '/users/docs/file2.txt'));
// Output: 'file2.txt'

// Same file
console.log(path.relative('/users/docs/file.txt', '/users/docs/file.txt'));
// Output: ''

// Different roots (Windows)
console.log(path.relative('C:\\user\\test\\aaa', 'C:\\user\\impl\\bbb'));
// Output: '..\\..\\impl\\bbb'

// Practical example: Creating a relative path for web
const absolutePath = '/var/www/static/images/logo.png';
const webRoot = '/var/www/';
const webPath = path.relative(webRoot, absolutePath).replace(/\\/g, '/');
console.log(webPath); // 'static/images/logo.png' 
