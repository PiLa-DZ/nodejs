// *** Handling Process Events ***
// *** Node.js processes can respond to system signals and events. ***
// *** Here are the most common ones: ***
// *** 2. Handling Process Termination (SIGTERM) ***

process.on('SIGTERM', () => {
  console.log('Received SIGTERM. Cleaning up...');
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
