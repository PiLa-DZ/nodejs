// *** Creating and Writing Files ***
// *** Creates a new file or overwrites an existing file with the specified content: ***
// *** 2. Using fs.appendFile() ***

const fs = require('fs').promises;

async function appendToFile() {
  try {
    // Append a timestamped log entry
    const logEntry = `${new Date().toISOString()}: Application started\n`;
    await fs.appendFile('./dir/app.log', logEntry, 'utf8');

    console.log('Log entry added');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}

appendToFile();
