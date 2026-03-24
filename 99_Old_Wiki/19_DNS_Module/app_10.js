// *** Performance Optimization ***
// *** DNS lookups can be a performance bottleneck in applications. Here are strategies to optimize DNS resolution: ***
// *** 1. Caching ***
// *** Implement a simple DNS cache to avoid repeated lookups for the same domain: ***

const dns = require('dns');
const util = require('util');
const lookup = util.promisify(dns.lookup);
const dnsCache = new Map();
async function cachedLookup(domain) {
  if (dnsCache.has(domain)) {
    console.log('Cache hit for:', domain);
    return dnsCache.get(domain);
  }
  console.log('Cache miss for:', domain);
  const result = await lookup(domain);
  dnsCache.set(domain, result);
  return result;
}
// Example usage
(async () => {
  const domains = ['google.com', 'facebook.com', 'google.com'];
  for (const domain of domains) {
    const result = await cachedLookup(domain);
    console.log(`${domain} → ${result.address}`);
  }
})();
