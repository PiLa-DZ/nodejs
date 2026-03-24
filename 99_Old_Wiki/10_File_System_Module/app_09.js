// *** Deleting Files and Directories ***
// *** 2. Deleting Multiple Files ***
// *** To delete multiple files, you can use Promise.all() with fs.unlink(): ***

const fs = require('fs').promises;
// const path = require('path');

async function deleteFiles() {
  const filesToDelete = [
    'temp1.txt',
    'temp2.txt',
    'temp3.txt'
  ];

  try {
    // Delete all files in parallel
    await Promise.all(
      filesToDelete.map(file =>
        fs.unlink(file).catch(err => {
          if (err.code !== 'ENOENT') {
            console.error(`Error deleting ${file}:`, err);
          }
        })
      )
    );

    console.log('Files deleted successfully');
  } catch (err) {
    console.error('Error during file deletion:', err);
  }
}

deleteFiles(); 
