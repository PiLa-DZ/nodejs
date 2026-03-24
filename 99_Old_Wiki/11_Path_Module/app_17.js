// *** Security Considerations ***
// *** When working with file paths, security should always be a top priority. Here are some important security considerations and best practices: ***
// *** Example: Secure Path Handling ***

const path = require('path');
const fs = require('fs').promises;

// 1. Prevent directory traversal attacks
function safeJoin(base, ...paths) {
  const targetPath = path.join(base, ...paths);
  const normalizedPath = path.normalize(targetPath);
 
  // Ensure the resulting path is still within the base directory
  if (!normalizedPath.startsWith(path.resolve(base))) {
    throw new Error('Access denied: Path traversal detected');
  }
 
  return normalizedPath;
}

// 2. Validate file extensions
const ALLOWED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.gif']);

function hasValidExtension(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return ALLOWED_EXTENSIONS.has(ext);
}

// 3. Safe file operations
async function safeReadFile(baseDir, relativePath) {
  const safePath = safeJoin(baseDir, relativePath);
 
  // Additional security checks
  if (!hasValidExtension(safePath)) {
    throw new Error('Invalid file type');
  }
 
  const stats = await fs.stat(safePath);
  if (!stats.isFile()) {
    throw new Error('Not a file');
  }
 
  return fs.readFile(safePath, 'utf8');
}

// Example usage
(async () => {
  const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
  const userInput = '../../../etc/passwd'; // Malicious input
 
  try {
    // This will throw an error due to path traversal attempt
    const content = await safeReadFile(UPLOAD_DIR, userInput);
    console.log('File content:', content);
  } catch (error) {
    console.error('Security error:', error.message);
  }
})();
