// *** Path Module Methods ***
// *** __dirname and __filename ***
// *** Example: Getting __dirname and __filename in ES Modules ***

// ES Module (e.g., app.mjs or "type": "module" in package.json)
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the current module's URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('ES Module file path:', __filename);
console.log('ES Module directory:', __dirname);

// Example with dynamic imports
async function loadConfig() {
  const configPath = new URL('../config/app-config.json', import.meta.url);
  const config = await import(configPath, { with: { type: 'json' } });
  return config;
}
