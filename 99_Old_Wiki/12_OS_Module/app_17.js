// *** OS Constants and Utilities ***
// *** os.constants ***
// *** Returns an object containing commonly used operating system specific constants for error codes, process signals, and more. ***

const os = require('os');

// Get all signal constants
console.log('Signal Constants:', os.constants.signals);

// Example: Handle common signals
process.on('SIGINT', () => {
  console.log('Received SIGINT. Performing cleanup...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Shutting down gracefully...');
  process.exit(0);
});

console.log('Process is running. Press Ctrl+C to exit.');
