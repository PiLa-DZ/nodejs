// *** Performance Optimization ***
// *** DNS lookups can be a performance bottleneck in applications. Here are strategies to optimize DNS resolution: ***
// *** 3. Custom Resolvers and Timeouts ***
// *** Configure custom DNS servers and timeouts for better control: ***

const dns = require('dns');
const { Resolver } = dns;

// Create a custom resolver with timeout
const resolver = new Resolver();
resolver.setServers(['8.8.8.8', '1.1.1.1']); // Google and Cloudflare DNS
// Set timeout for all operations (in ms)
const TIMEOUT = 2000;
async function resolveWithTimeout(domain, rrtype = 'A') {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error(`DNS query timed out after ${TIMEOUT}ms`));
    }, TIMEOUT);

    resolver.resolve(domain, rrtype, (err, addresses) => {
      clearTimeout(timer);
      if (err) return reject(err);
      resolve(addresses);
    });
  });
}
// Example usage
resolveWithTimeout('example.com')
  .then(console.log)
  .catch(console.error);
