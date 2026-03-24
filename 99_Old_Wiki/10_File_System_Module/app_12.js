// *** Renaming and Moving Files ***
// *** 1. Basic File Renaming ***
// *** To rename a file in the same directory: ***

const fs = require('fs').promises;

async function renameFile() {
  const oldPath = './dir/old-name.txt';
  const newPath = './dir/new-name.txt';

  try {
    // Check if source file exists
    await fs.access(oldPath);

    // Check if destination file already exists
    try {
      await fs.access(newPath);
      console.log('Destination file already exists');
      return;
    } catch (err) {
      // Destination doesn't exist, safe to proceed
    }

    // Perform the rename
    await fs.rename(oldPath, newPath);
    console.log('File renamed successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else {
      console.error('Error renaming file:', err);
    }
  }
}

// Usage
renameFile(); 
