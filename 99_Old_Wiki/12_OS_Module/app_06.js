// *** System Information ***
// *** os.version() ***
// *** Returns a string identifying the kernel version. On Windows, this includes build information. ***

const os = require('os');

// Get kernel version
console.log(`Kernel Version: ${os.version()}`);

// Example output:
// - Windows: 'Windows 10 Enterprise 10.0.19044'
// - Linux: '#49-Ubuntu SMP Tue Aug 2 08:49:28 UTC 2022'
// - macOS: 'Darwin Kernel Version 21.6.0: ...'
