// Environment Variables
// Environment variables are key-value pairs that configure your application's behavior in different environments.
// Accessing Environment Variables

// Get a specific environment variable
const apiKey = process.env.API_KEY;

// Set a default value if not defined
const port = process.env.PORT || 3000;

// Check if running in production
const isProduction = process.env.NODE_ENV === 'production';

// List all environment variables
console.log('Environment variables:', process.env);
