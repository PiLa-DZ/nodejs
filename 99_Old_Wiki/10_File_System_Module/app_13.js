// *** Renaming and Moving Files ***
// *** 2. Moving Files Between Directories ***
// *** You can use fs.rename() to move files between directories: ***

const fs = require('fs').promises;
const path = require('path');

async function moveFile() {
  const sourceFile = './dir/file.txt';
  const targetDir = 'destination';
  const targetFile = path.join(targetDir, 'file.txt');

  try {
    // Ensure source file exists
    await fs.access(sourceFile);

    // Create target directory if it doesn't exist
    await fs.mkdir(targetDir, { recursive: true });

    // Move the file
    await fs.rename(sourceFile, targetFile);

    console.log('File moved successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('Source file does not exist');
    } else if (err.code === 'EXDEV') {
      console.log('Cross-device move detected, using copy+delete fallback');
      await moveAcrossDevices(sourceFile, targetFile);
    } else {
      console.error('Error moving file:', err);
    }
  }
}

// Helper function for cross-device moves
async function moveAcrossDevices(source, target) {
  try {
    // Copy the file
    await fs.copyFile(source, target);

    // Delete the original
    await fs.unlink(source);

    console.log('File moved across devices successfully');
  } catch (err) {
    // Clean up if something went wrong
    try { await fs.unlink(target); } catch (e) {}
    throw err;
  }
}

// Usage
moveFile(); 
