// *** Advanced Path Handling Patterns ***
// *** Here are some advanced patterns for working with paths in real-world applications. ***
// *** Example: Path Utilities for Production Applications ***

const path = require('path');
const fs = require('fs/promises');
const os = require('os');

// Path utility class
class PathUtils {
  static get tempDir() {
    return path.join(os.tmpdir(), 'myapp');
  }
 
  static get userHome() {
    return process.env.HOME || process.env.USERPROFILE || os.homedir();
  }

  static async ensureDirectory(dirPath) {
    try {
      await fs.mkdir(dirPath, { recursive: true, mode: 0o755 });
      return true;
    } catch (error) {
      if (error.code !== 'EEXIST') throw error;
      return false;
    }
  }
 
  static isSafePath(baseDir, targetPath) {
    const normalizedBase = path.resolve(baseDir);
    const normalizedTarget = path.resolve(targetPath);
    return normalizedTarget.startsWith(normalizedBase);
  }
 
  static getUniqueFilename(dir, filename) {
    const { name, ext } = path.parse(filename);
    let counter = 1;
    let candidate = filename;
   
    while (fs.existsSync(path.join(dir, candidate))) {
      candidate = `${name} (${counter++})${ext}`;
    }
    return candidate;
  }
}

// Example usage
(async () => {
  // Ensure temp directory exists
  await PathUtils.ensureDirectory(PathUtils.tempDir);
 
  // Safe file operations
  const userUploads = path.join(PathUtils.userHome, 'uploads');
  const safePath = path.join(userUploads, 'profile.jpg');
 
  if (PathUtils.isSafePath(userUploads, safePath)) {
    console.log('Path is safe for operations');
  } else {
    console.error('Potential path traversal attack detected!');
  }
 
  // Generate unique filename
  const uniqueName = PathUtils.getUniqueFilename(
    userUploads,
    'document.pdf'
  );
  console.log('Unique filename:', uniqueName);
 
  // Working with file extensions
  const filePath = '/users/john/docs/report.pdf';
  const fileInfo = {
    name: path.basename(filePath, path.extname(filePath)),
    ext: path.extname(filePath),
    dir: path.dirname(filePath)
  };
  console.log('File info:', fileInfo);
})();
