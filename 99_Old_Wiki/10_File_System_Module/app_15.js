// *** Renaming and Moving Files ***
// *** 4. Atomic Rename Operations ***
// *** For critical operations, use a temporary file to ensure atomicity: ***
// Note: --> This code just for show 

const fs = require('fs').promises;
const path = require('path');
const os = require('os');

async function updateFileAtomic(filePath, newContent) {
  const tempPath = path.join(
    os.tmpdir(),
    `temp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
  );

  try {
    // 1. Write to temp file
    await fs.writeFile(tempPath, newContent, 'utf8');

    // 2. Verify the temp file was written correctly
    const stats = await fs.stat(tempPath);
    if (stats.size === 0) {
      throw new Error('Temporary file is empty');
    }

    // 3. Rename (atomic on most systems)
    await fs.rename(tempPath, filePath);

    console.log('File updated atomically');
  } catch (err) {
    // Clean up temp file if it exists
    try { await fs.unlink(tempPath); } catch (e) {}

    console.error('Atomic update failed:', err);
    throw err;
  }
}

// Usage
updateFileAtomic('important-config.json', JSON.stringify({ key: 'value' }, null, 2));
