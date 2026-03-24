// *** Child Processes ***
// *** Node.js can run system commands and other scripts using the child_process module. ***
// *** 2. Using spawn for Large Output ***

const { spawn } = require('child_process');

// Better for large data output
const child = spawn('find', ['/', '-type', 'f']);
child.stdout.on('data', (data) => {
  console.log(`Found file: ${data}`);
});
child.stderr.on('data', (data) => {
  console.error(`Error: ${data}`);
});
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});

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
