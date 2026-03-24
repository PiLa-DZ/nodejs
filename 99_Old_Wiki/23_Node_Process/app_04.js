// *** Exiting a Process ***
// *** You can control when your Node.js program stops using these methods: ***
// *** 3. Before Exit Event ***

// Run cleanup before exiting
process.on('beforeExit', (code) => {
  console.log('About to exit with code:', code);
});
