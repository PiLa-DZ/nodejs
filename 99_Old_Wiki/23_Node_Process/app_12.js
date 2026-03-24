// *** Child Processes ***
// *** Node.js can run system commands and other scripts using the child_process module. ***
// *** 1. Execute a Simple Command ***

const { exec } = require('child_process');

exec('ls -la', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});
