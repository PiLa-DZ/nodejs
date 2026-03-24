// *** Deleting Files and Directories ***
// *** 3. Deleting Directories ***
// *** To delete directories, you have several options depending on your needs: ***

const fs = require('fs').promises;
// const path = require('path');

async function deleteDirectory(dirPath) {
  try {
    // Check if the directory exists
    const stats = await fs.stat(dirPath);
   
    if (!stats.isDirectory()) {
      console.log('Path is not a directory');
      return;
    }

    // For Node.js 14.14.0+ (recommended)
    await fs.rm(dirPath, { recursive: true, force: true });

    // For older Node.js versions (deprecated but still works)
    // await fs.rmdir(dirPath, { recursive: true });

    console.log('Directory deleted successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Directory does not exist');
    } else {
      console.error('Error deleting directory:', err);
    }
  }
}

// Usage
deleteDirectory('directory-to-delete');
