// Loading Environment Variables from .env File
// # Install dotenv package
npm install dotenv

// Load environment variables from .env file
require('dotenv').config();

// Now you can access variables from .env
console.log('Database URL:', process.env.DATABASE_URL);
