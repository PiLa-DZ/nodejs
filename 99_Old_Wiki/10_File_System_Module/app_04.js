// *** Creating and Writing Files ***
// *** Creates a new file or overwrites an existing file with the specified content: ***
// *** 1. Using fs.writeFile() ***

const fs = require('fs').promises;

async function writeFileExample() {
  try {
    // Write text to a file
    await fs.writeFile('./dir/Write_File_1.txt', 'Hello, World!', 'utf8');

    // Write JSON data
    const data = { name: 'John', age: 30, city: 'New York' };
    await fs.writeFile('./dir/data.json', JSON.stringify(data, null, 2), 'utf8');

    console.log('Files created successfully');
  } catch (err) {
    console.error('Error writing files:', err);
  }
}

writeFileExample();
