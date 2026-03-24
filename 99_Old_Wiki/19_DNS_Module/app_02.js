// *** Importing and Setup ***
// *** To use the DNS module, you can import it in your Node.js application using either the callback or promise-based API: ***
// *** Callback-based API ***

// Import the DNS module
const dns = require('dns');

// Example usage
dns.lookup('google.com', (err, address, family) => {
  if (err) throw err;
  console.log(`Resolved: ${address} (IPv${family})`);
});
