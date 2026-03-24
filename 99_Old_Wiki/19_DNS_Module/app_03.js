// *** Importing and Setup ***
// *** Promise-based API (Node.js 10.0.0+) ***

// Import the promises API
const { promises: dns } = require('dns');
// Or: const dns = require('dns').promises;
// Example with async/await
async function lookupDomain(domain) {
  try {
    const address = await dns.lookup(domain);
    console.log(`Resolved: ${address.address} (IPv${address.family})`);
  } catch (err) {
    console.error('Lookup failed:', err);
  }
}
lookupDomain('google.com');
