// *** HMAC (Hash-based Message Authentication Code) ***
// *** HMAC is a specific type of message authentication code (MAC) involving a cryptographic hash function and a secret cryptographic key. ***
// *** It provides both data integrity and authentication. ***
// *** When to Use HMAC ***
// ***     API request verification ***
// ***     Secure cookies and sessions ***
// ***     Data integrity checks ***
// ***     Webhook verification ***
// *** HMAC Security Properties ***
// ***     Message Integrity: Any change to the message will produce a different HMAC ***
// ***     Authenticity: Only parties with the secret key can generate valid HMACs ***
// ***     No Encryption: HMAC doesn't encrypt the message, only verifies its integrity ***

const crypto = require('crypto');

// Secret key
const secretKey = 'mySecretKey';

// Create an HMAC
const hmac = crypto.createHmac('sha256', secretKey);

// Update with data
hmac.update('Hello, World!');

// Get the digest
const hmacDigest = hmac.digest('hex');
console.log('HMAC:', hmacDigest);
