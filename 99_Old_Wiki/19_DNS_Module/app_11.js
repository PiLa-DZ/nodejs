// *** Performance Optimization ***
// *** DNS lookups can be a performance bottleneck in applications. Here are strategies to optimize DNS resolution: ***
// *** 2. Parallel Lookups ***
// *** Use Promise.all() to perform multiple DNS lookups in parallel: ***

const dns = require('dns').promises;
async function lookupMultiple(domains) {
  try {
    const lookups = domains.map(domain => dns.lookup(domain));
    const results = await Promise.all(lookups);
    return domains.map((domain, i) => ({
      domain,
      ...results[i]
    }));
  } catch (err) {
    console.error('One or more lookups failed:', err);
    throw err;
  }
}
// Example usage
lookupMultiple(['google.com', 'facebook.com', 'github.com'])
  .then(results => console.log(results))
  .catch(console.error);
