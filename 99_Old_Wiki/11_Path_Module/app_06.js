// *** Path Module Methods ***
// *** path.parse() ***
// *** Returns an object whose properties represent significant elements of the path. ***

const path = require('path');

// Parse a file path
const pathInfo = path.parse('/users/docs/file.txt');
console.log(pathInfo);
/* Output on Unix/macOS:
{
  root: '/',
  dir: '/users/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// Accessing parsed components
console.log('Directory:', pathInfo.dir); // /users/docs
console.log('Filename:', pathInfo.base); // file.txt
console.log('Name only:', pathInfo.name); // file
console.log('Extension:', pathInfo.ext); // .txt 
