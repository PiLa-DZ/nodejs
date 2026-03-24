// *** Path Module Methods ***
// *** path.isAbsolute() ***
// *** Determines if the given path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory. ***

const path = require('path');

// POSIX (Unix/Linux/macOS)
console.log(`Linux`, path.isAbsolute('/users/docs')); // true
console.log(`Linux`, path.isAbsolute('users/docs')); // false

// Windows
console.log(`Windows`, path.isAbsolute('C:\\temp')); // true
console.log(`Windows`, path.isAbsolute('temp')); // false

// UNC paths (Windows network paths)
console.log(`Windows`, path.isAbsolute('\\\\server\\share')); // true

// Practical example: Ensure absolute path for config files
function ensureAbsolute(configPath) {
  return path.isAbsolute(configPath)
    ? configPath
    : path.resolve(process.cwd(), configPath);
  }

console.log(ensureAbsolute('config.json')); // Resolves to absolute path
console.log(ensureAbsolute('/etc/app/config.json')); // Already absolute
