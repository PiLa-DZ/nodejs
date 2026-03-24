// *** Accessing Process Information ***
// *** The process object gives you details about and control over the current Node.js process. ***
// *** Here are some useful properties: ***

// Process identification
console.log('Process ID (PID):', process.pid);

// Platform information
console.log('Platform:', process.platform);
console.log('Node.js version:', process.version);

// Memory usage (in bytes)
console.log('Memory usage:', process.memoryUsage());

// Command line arguments
console.log('Arguments:', process.argv); 
