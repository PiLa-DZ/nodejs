// *** HMAC for Message Verification ***

const crypto = require('crypto');

// Function to create an HMAC for a message
function createSignature(message, key) {
  const hmac = crypto.createHmac('sha256', key);
  hmac.update(message);
  return hmac.digest('hex');
}

// Function to verify a message's signature
function verifySignature(message, signature, key) {
  const expectedSignature = createSignature(message, key);
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}

// Example usage
const secretKey = 'verySecretKey';
const message = 'Important message to verify';

// Sender creates a signature
const signature = createSignature(message, secretKey);
console.log('Message:', message);
console.log('Signature:', signature);

// Receiver verifies the signature
try {
  const isValid = verifySignature(message, signature, secretKey);
  console.log('Signature valid:', isValid); // true

  // Try with a tampered message
  const isInvalid = verifySignature('Tampered message', signature, secretKey);
  console.log('Tampered message valid:', isInvalid); // false
} catch (error) {
  console.error('Verification error:', error.message);
}
