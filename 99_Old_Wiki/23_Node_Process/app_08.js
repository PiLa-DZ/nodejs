// *** Handling Process Events ***
// *** Node.js processes can respond to system signals and events. ***
// *** Here are the most common ones: ***
// *** 3. Uncaught Exceptions ***

process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  // Perform cleanup if needed
  process.exit(1); // Exit with error
});
