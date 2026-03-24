// *** Getting Started with DNS ***
// *** Here's a quick example of using the DNS module to look up a domain's IP address: ***
// *** Basic DNS Lookup ***

const dns = require('dns');

// Look up a domain name
dns.lookup('google.com', (err, address, family) => {
  if (err) {
    console.error('Lookup error:', err);
    return;
  }
  console.log(`IP address: ${address}`);
  console.log(`IP version: IPv${family}`);
}); 

// Output:
// IP address: 172.217.18.46
// IP version: IPv4
