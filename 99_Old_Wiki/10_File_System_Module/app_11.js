// *** Deleting Files and Directories ***
// *** 4. Emptying a Directory Without Deleting It ***
// *** Example: Emptying a directory ***

const fs = require('fs').promises;
const path = require('path');

async function emptyDirectory(dirPath) {
  try {
    // Read the directory
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    // Delete all files and directories in parallel
    await Promise.all(
      files.map(file => {
        const fullPath = path.join(dirPath, file.name);
        return file.isDirectory()
          ? fs.rm(fullPath, { recursive: true, force: true })
          : fs.unlink(fullPath);
      })
    );

    console.log('Directory emptied successfully');
  } catch (err) {
    console.error('Error emptying directory:', err);
  }
}

// Usage
emptyDirectory('directory-to-empty');
