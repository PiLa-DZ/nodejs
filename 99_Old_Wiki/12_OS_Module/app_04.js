// *** System Information ***
// *** os.type() ***
// *** Returns the operating system name as returned by uname on POSIX systems, or from the ver command on Windows. ***

const os = require('os');

// Get OS type
console.log(`OS Type: ${os.type()}`);

// Examples:
// - 'Linux' on Linux
// - 'Darwin' on macOS
// - 'Windows_NT' on Windows
