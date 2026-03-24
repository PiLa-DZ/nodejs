// *** Advanced DNS Operations ***
// *** 3. Error Handling and Retries ***
// *** Robust DNS handling requires proper error management. Here's how to handle common DNS errors and implement retry logic: ***

const dns = require('dns');

function lookupWithErrorHandling(domain) {
  dns.lookup(domain, (err, address, family) => {
    if (err) {
      console.error(`DNS lookup failed for ${domain}`);

       // Check specific error codes
       switch (err.code) {
         case 'ENOTFOUND':
           console.error(' Domain name not found');
           break;
         case 'ETIMEDOUT':
           console.error(' DNS lookup timed out');
           break;
         case 'ENODATA':
           console.error(' Domain exists but no data of requested type');
           break;
         case 'ESERVFAIL':
           console.error(' DNS server returned general failure');
           break;
         default:
           console.error(` Error code: ${err.code}`);
         }

         return;
     }

     console.log(`DNS lookup successful for ${domain}`);
     console.log(` IP address: ${address}`);
     console.log(` IP version: IPv${family}`);
     });
}

// Test with valid and invalid domains
lookupWithErrorHandling('www.google.com');
lookupWithErrorHandling('this-domain-does-not-exist-123456789.com');
