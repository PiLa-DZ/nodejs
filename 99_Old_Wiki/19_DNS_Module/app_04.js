// *** Basic DNS Lookups ***
// *** The DNS module provides several methods for looking up domain names and IP addresses. The most common operations are: ***
// ***     dns.lookup(): Uses the operating system's facilities to resolve hostnames ***
// ***     dns.resolve*(): Performs DNS queries directly to name servers ***
// ***     dns.reverse(): Performs reverse DNS lookups (IP to hostname) ***
// *** Resolving Domain Names to IP Addresses ***

const dns = require('dns');

// Callback-based API
dns.lookup('www.google.com', (err, address, family) => {
  if (err) throw err;
  console.log('IP address: %s', address);
  console.log('IP version: IPv%s', family);
});
