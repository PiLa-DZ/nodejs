// *** Advanced Buffer Operations ***
// *** Best Practices: ***
// ***  // Avoid using Buffer.allocUnsafe() unless performance is critical and you immediately fill the buffer ***
// ***  // Zero-fill buffers after use when they contained sensitive information ***
// ***  // Be careful when sharing buffer instances or slices, as changes are reflected across all references ***
// ***  // Validate buffer inputs when receiving binary data from external sources ***

// Example: Safely handling sensitive data
function processPassword(password) {
  // Create a buffer to hold the password
  const passwordBuffer = Buffer.from(password);

  // Process the password (e.g., hashing)
  const hashedPassword = hashPassword(passwordBuffer);

  // Zero out the original password buffer for security
  passwordBuffer.fill(0);

  return hashedPassword;
}

// Simple hashing function for demonstration
function hashPassword(buffer) {
  // In a real application, you would use a cryptographic hash function
  // This is a simplified example
  let hash = 0;
  for (let i = 0; i < buffer.length; i++) {
    hash = ((hash < 5) - hash) + buffer[i];
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString(16);
}

// Usage
const password = 'secret123';
const hashedPassword = processPassword(password);
console.log('Hashed password:', hashedPassword);
