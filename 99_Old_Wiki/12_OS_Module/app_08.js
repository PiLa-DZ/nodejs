// *** User and Environment ***
// *** os.homedir() ***
// *** Returns the home directory of the current user. ***

const os = require('os');
const path = require('path');

// Get the home directory
const homeDir = os.homedir();
console.log(`Home Directory: ${homeDir}`);

// Example: Create a path to a config file in the user's home directory
const configPath = path.join(homeDir, '.myapp', 'config.json');
console.log(`Config file will be saved to: ${configPath}`);
