// *** Advanced DNS Operations ***
// *** 1. Custom DNS Resolution ***
// *** Create a custom DNS resolver with specific settings for more control over DNS lookups: ***

const dns = require('dns');

// Create a new resolver
const resolver = new dns.Resolver();

// Set custom server (Google's public DNS)
resolver.setServers(['8.8.8.8', '8.8.4.4']);

// Use the custom resolver
resolver.resolve4('www.google.com', (err, addresses) => {
  if (err) throw err;

  console.log('Addresses resolved using Google DNS:');
  addresses.forEach(addr => {
    console.log(` ${addr}`);
  });
});

// See what servers are configured
console.log('Current resolver servers:', resolver.getServers());
