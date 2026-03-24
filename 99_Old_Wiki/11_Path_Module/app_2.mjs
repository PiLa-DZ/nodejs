// *** ES Modules Path Handling ***
// *** In ECMAScript modules (files with .mjs extension or when "type": "module" is set in package.json),  ***
// *** __dirname and __filename are not available. Here's how to handle paths in ES modules: ***

// ES Module (app.mjs or with "type": "module" in package.json)
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

// Get current module's directory and file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Utility function for path resolution in ES modules
function resolvePath(relativePath) {
  return new URL(relativePath, import.meta.url).pathname;
}

// Example usage
const configPath = join(__dirname, '..', 'config', 'settings.json');
const assetPath = resolvePath('../assets/logo.png');

// Dynamic imports with paths relative to current module
async function loadModule(modulePath) {
  const fullPath = new URL(modulePath, import.meta.url);
  return import(fullPath);
}

// Key Points:
    // Use import.meta.url to get the current module's URL
    // Convert URL to file path with fileURLToPath() when needed
    // For path resolution, use the URL constructor with import.meta.url as the base
    // Continue using path.join() and other path methods for cross-platform compatibility

