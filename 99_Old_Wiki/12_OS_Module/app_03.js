// *** System Information ***
// *** os.platform() ***
// *** Returns a string identifying the operating system platform. ***

const os = require('os');

// Get platform information
const platform = os.platform();
console.log(`Platform: ${platform}`);

// Common values:
// - 'darwin' for macOS
// - 'win32' for Windows (both 32-bit and 64-bit)
// - 'linux' for Linux
// - 'freebsd' for FreeBSD
// - 'openbsd' for OpenBSD
