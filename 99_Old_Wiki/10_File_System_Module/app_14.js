// *** Renaming and Moving Files ***
// *** 3. Batch Renaming Files ***
// *** To rename multiple files matching a pattern: ***

const fs = require('fs').promises;
const path = require('path');

async function batchRename() {
  const directory = 'images';
  const pattern = /^image(\d+)\.jpg$/;

  try {
    // Read directory contents
    const files = await fs.readdir(directory);

    // Process each file
    for (const file of files) {
      const match = file.match(pattern);
      if (match) {
        const [_, number] = match;
        const newName = `photo-${number.padStart(3, '0')}.jpg`;
        const oldPath = path.join(directory, file);
        const newPath = path.join(directory, newName);

        // Skip if the new name is the same as the old name
        if (oldPath !== newPath) {
          await fs.rename(oldPath, newPath);
          console.log(`Renamed: ${file} - ${newName}`);
        }
      }
    }

    console.log('Batch rename completed');
  } catch (err) {
    console.error('Error during batch rename:', err);
  }
}

batchRename();
