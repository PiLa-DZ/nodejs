// *** User and Environment ***
// *** os.tmpdir() ***
// *** Returns the operating system's default directory for temporary files. ***

const os = require('os');

// Get the system default temp dir
console.log(`Temporary Directory: ${os.tmpdir()}`);
