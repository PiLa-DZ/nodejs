// *** Path Properties ***
// *** path.delimiter ***
// *** Provides the platform-specific path delimiter used to separate paths in environment variables like PATH. ***

const path = require('path');

// Get the platform-specific delimiter
console.log(`Path delimiter: ${JSON.stringify(path.delimiter)}`); // ';' on Windows, ':' on POSIX

// Working with PATH environment variable
function findInPath(executable) {
  if (!process.env.PATH) return null;

  // Split PATH into directories
  const pathDirs = process.env.PATH.split(path.delimiter);

  // Check each directory for the executable
  for (const dir of pathDirs) {
    try {
      const fullPath = path.join(dir, executable);
      require('fs').accessSync(fullPath, require('fs').constants.X_OK);
      return fullPath;
    } catch (err) {
      // File not found or not executable
      continue;
    }
  }
  return null;
}

// Example: Find node executable in PATH
const nodePath = findInPath(process.platform === 'win32' ? 'node.exe' : 'node');
console.log('Node.js path:', nodePath || 'Not found in PATH');
