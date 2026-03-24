// *** Deleting Files and Directories ***
// *** 1. Deleting a Single File ***
// *** Use fs.unlink() to delete a file: ***

const fs = require('fs').promises;

async function deleteFile() {
  const filePath = 'file-to-delete.txt';

  try {
    // Check if file exists before deleting
    await fs.access(filePath);

    // Delete the file
    await fs.unlink(filePath);
    console.log('File deleted successfully');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log('File does not exist');
    } else {
      console.error('Error deleting file:', err);
    }
  }
}

deleteFile();
