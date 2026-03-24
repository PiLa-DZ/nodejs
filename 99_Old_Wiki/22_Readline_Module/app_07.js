// *** Basic Readline Methods ***
// *** The Readline module provides several methods for interacting with the user. Here are the most commonly used ones: ***
// *** 4. rl.close() ***
// *** Closes the readline interface and releases control of the input and output streams. This is important to free up system resources and allow your program to exit cleanly. ***
// *** Proper Cleanup Example ***

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Handle application exit
function exitApp() {
  console.log('\nCleaning up resources...');

  // Perform any necessary cleanup
  // (e.g., close database connections, write logs, etc.)

  // Close the readline interface
  rl.close();
}

// Handle Ctrl+C
rl.on('SIGINT', () => {
  console.log('\nReceived SIGINT. Exiting...');
  exitApp();
});

// Handle normal exit
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});

// Start the application
console.log('Application started. Press Ctrl+C to exit.');
rl.prompt();

