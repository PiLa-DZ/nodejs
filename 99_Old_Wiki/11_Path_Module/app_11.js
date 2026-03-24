// *** Path Properties ***
// *** path.sep ***
// *** Provides the platform-specific path segment separator. ***

const path = require('path');

// Get the platform-specific separator
console.log(`Path separator: ${JSON.stringify(path.sep)}`); // '\\' on Windows, '/' on POSIX

// Building paths safely across platforms
const parts = ['users', 'docs', 'file.txt'];
const filePath = parts.join(path.sep);
console.log('Built path:', filePath);

// Splitting paths correctly
const pathToSplit = process.platform === 'win32'
  ? 'C:\\Users\\docs\\file.txt'
  : '/users/docs/file.txt';
const pathParts = pathToSplit.split(path.sep);
console.log('Split path:', pathParts);

// Normalizing paths with the correct separator
const normalized = path.normalize(`users${path.sep}docs${path.sep}..${path.sep}file.txt`);
console.log('Normalized path:', normalized);
