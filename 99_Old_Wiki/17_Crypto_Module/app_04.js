// *** Password Security ***
// *** When handling passwords, it's crucial to use specialized password hashing functions that are designed to be computationally expensive to prevent brute-force attacks. ***
// *** Here's why simple hashes are insufficient: ***
// *** Never store passwords in plain text or with simple hashes like MD5 or SHA-1. ***
// *** These can be easily cracked using rainbow tables or brute-force attacks. ***
// *** Key Concepts for Password Security ***
// ***  // Salting: Add a unique random value to each password before hashing ***
// ***  // Key Stretching: Make the hashing process intentionally slow to prevent brute-force attacks ***
// ***  // Work Factor: Control how computationally intensive the hashing process is ***
// *** Here's how to properly hash passwords in Node.js: ***
// *** What is a salt? ***
// *** A salt is a random string that is unique to each user. ***
// *** It's combined with the password before hashing to ensure that even if two users have the same password, their hashes will be different. ***
// *** This prevents attackers from using precomputed tables (like rainbow tables) to crack multiple passwords at once. ***


const crypto = require('crypto');

// Function to hash a password
function hashPassword(password) {
  // Generate a random salt (16 bytes)
  const salt = crypto.randomBytes(16).toString('hex');

  // Use scrypt for password hashing (recommended)
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');

  // Return both salt and hash for storage
  return { salt, hash };
}

// Function to verify a password
function verifyPassword(password, salt, hash) {
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString('hex');
  return hashedPassword === hash;
}

// Example usage
const password = 'mySecurePassword';

// Hash the password for storage
const { salt, hash } = hashPassword(password);
console.log('Salt:', salt);
console.log('Hash:', hash);

// Verify a login attempt
const isValid = verifyPassword(password, salt, hash);
console.log('Password valid:', isValid); // true

const isInvalid = verifyPassword('wrongPassword', salt, hash);
console.log('Wrong password valid:', isInvalid); // false
