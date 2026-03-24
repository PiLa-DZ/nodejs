// *** System Information ***
// *** os.arch() ***
// *** Returns the operating system CPU architecture for which the Node.js binary was compiled. ***

const os = require('os');

// Get CPU architecture
console.log(`CPU Architecture: ${os.arch()}`);

// Common values:
// - 'x64' for 64-bit systems
// - 'arm' for ARM processors
// - 'arm64' for 64-bit ARM
// - 'ia32' for 32-bit x86
// - 'mips' for MIPS processors
