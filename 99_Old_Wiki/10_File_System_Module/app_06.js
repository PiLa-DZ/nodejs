// *** Creating and Writing Files ***
// *** Creates a new file or overwrites an existing file with the specified content: ***
// *** 3. Using File Handles ***

const fs = require('fs').promises;

async function writeWithFileHandle() {
  let fileHandle;

  try {
    // Open a file for writing (creates if doesn't exist)
    fileHandle = await fs.open('./dir/output.txt', 'w');

    // Write content to the file
    await fileHandle.write('First line\n');
    await fileHandle.write('Second line\n');
    await fileHandle.write('Third line\n');

    console.log('Content written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  } finally {
    // Always close the file handle
    if (fileHandle) {
      await fileHandle.close();
    }
  }
}

writeWithFileHandle();
