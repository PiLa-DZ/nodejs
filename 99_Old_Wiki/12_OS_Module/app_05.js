// *** System Information ***
// *** os.release() ***
// *** Returns the operating system release number. ***

const os = require('os');

// Get OS release information
console.log(`OS Release: ${os.release()}`);

// Examples:
// - '10.0.19044' on Windows 10
// - '21.6.0' on macOS Monterey
// - '5.15.0-46-generic' on Ubuntu
