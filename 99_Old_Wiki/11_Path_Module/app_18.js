// *** Cross-Platform Development ***
// *** When developing cross-platform applications, it's important to handle path differences between operating systems correctly. ***
// *** Example: Cross-Platform Path Handling ***

const path = require('path');

// Platform detection
const isWindows = process.platform === 'win32';
const isMac = process.platform === 'darwin';
const isLinux = process.platform === 'linux';

// Platform-specific paths
const appDataDir = isWindows
  ? path.join(process.env.APPDATA || path.join(process.env.USERPROFILE, 'AppData', 'Roaming'))
  : path.join(process.env.HOME || process.env.USERPROFILE, isMac ? 'Library/Application Support' : '.config');

// Application-specific directories
const appName = 'MyApp';
const appDir = path.join(appDataDir, appName);

// Ensure application directory exists
require('fs').mkdirSync(appDir, { recursive: true });

// Platform-specific temporary directory
const tempDir = path.join(require('os').tmpdir(), appName);

// Example: Platform-agnostic path handling
function getConfigPath() {
  const configName = 'config.json';

  // Development vs production paths
  if (process.env.NODE_ENV === 'development') {
    return path.join(process.cwd(), 'config', configName);
  }
  
  // Production path
  return path.join(appDir, configName);
}

console.log('Application directory:', appDir);
console.log('Temporary directory:', tempDir);
console.log('Config file path:', getConfigPath());
