// *** Basic DNS Lookups ***
// *** The DNS module provides several methods for looking up domain names and IP addresses. The most common operations are: ***
// ***     dns.lookup(): Uses the operating system's facilities to resolve hostnames ***
// ***     dns.resolve*(): Performs DNS queries directly to name servers ***
// ***     dns.reverse(): Performs reverse DNS lookups (IP to hostname) ***
// *** Resolving Domain Names to IP Addresses ***

const dns = require('dns').promises;

// Promise-based API
async function lookupExample() {
  try {
    const result = await dns.lookup('www.google.com');
    console.log('IP address:', result.address);
    console.log('IP version: IPv' + result.family);
  } catch (err) {
    console.error('Lookup failed:', err);
  }
}
lookupExample(); 
