// *** Path Properties ***
// *** path.posix ***
// *** Provides access to POSIX-compliant path methods, ensuring consistent forward-slash path handling across all platforms. ***
// *** Example: Working with POSIX paths on any platform ***

const path = require('path');

// Always use POSIX-style path handling
const posixPath = '/home/user/documents/file.txt';
console.log('POSIX basename:', path.posix.basename(posixPath));
console.log('POSIX dirname:', path.posix.dirname(posixPath));

// Normalize POSIX paths
console.log('Normalized path:', path.posix.normalize('/usr/local//bin/../lib/file.txt'));

// Working with relative paths
console.log('Relative path:', path.posix.relative('/data/test/aaa', '/data/impl/bbb'));

// Joining paths with POSIX separators
const urlPath = ['static', 'images', 'logo.png'].join(path.posix.sep);
console.log('URL path:', urlPath); // 'static/images/logo.png'
