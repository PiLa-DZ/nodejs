// *** Handling Process Events ***
// *** Node.js processes can respond to system signals and events. ***
// *** Here are the most common ones: ***
// *** 1. Handling Ctrl+C (SIGINT) ***

setInterval(() => console.log('1'), 1000)

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\nGot SIGINT. Press Control-D to exit.');
  // Perform cleanup if needed
  process.exit(0);
})
