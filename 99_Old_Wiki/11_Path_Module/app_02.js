// *** Path Module Methods ***
// *** __dirname and __filename ***
// *** Example: Using __dirname and __filename in CommonJS ***

// CommonJS module (e.g., app.js)
const path = require('path');

// Get the directory name of the current module
console.log('Directory name:', __dirname);

// Get the file name of the current module
console.log('File name:', __filename);

// Building paths relative to the current module
const configPath = path.join(__dirname, 'config', 'app-config.json');
console.log('Config file path:', configPath);

// Getting the directory name using path.dirname()
console.log('Directory using path.dirname():', path.dirname(__filename));
