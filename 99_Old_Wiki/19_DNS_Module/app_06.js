// *** Looking Up All IP Addresses for a Domain ***

const dns = require('dns');

// Get all IPv4 addresses
dns.resolve4('www.google.com', (err, addresses) => {
  if (err) throw err;

  console.log('IPv4 addresses:');
  addresses.forEach(address => {
    console.log(` ${address}`);
  });

// Perform a reverse lookup on the first IP
  dns.reverse(addresses[0], (err, hostnames) => {
    if (err) throw err;

    console.log(`Reverse lookup for ${addresses[0]}:`);
    hostnames.forEach(hostname => {
      console.log(` ${hostname}`);
    });
  });
});
