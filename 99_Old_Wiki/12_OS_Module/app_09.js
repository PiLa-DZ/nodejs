// *** User and Environment ***
// *** os.hostname() ***
// *** Returns the hostname of the operating system. ***

const os = require('os');

// Get the system hostname
const hostname = os.hostname();
console.log(`Hostname: ${hostname}`);

// Example: Use hostname in logging or configuration
console.log(`Server started on ${hostname} at ${new Date().toISOString()}`);
