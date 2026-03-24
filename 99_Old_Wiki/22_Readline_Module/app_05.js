// *** Basic Readline Methods ***
// *** The Readline module provides several methods for interacting with the user. Here are the most commonly used ones: ***
// *** 2. rl.prompt([preserveCursor]) ***
// *** Writes the current prompt to output and waits for user input. The optional preserveCursor parameter (boolean) determines if the cursor position should be preserved. ***
// *** Basic Prompt Example ***

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'CLI> '
});
// Display initial prompt
rl.prompt();

// Handle each line of input
rl.on('line', (line) => {
  const input = line.trim();

  switch (input) {
    case 'hello':
      console.log('Hello there!');
      break;
    case 'time':
      console.log(`Current time: ${new Date().toLocaleTimeString()}`);
      break;
    case 'exit':
      rl.close();
      return;
    default:
      console.log(`You entered: ${input}`);
  }

  // Show the prompt again
  rl.prompt();
});

// Handle application exit
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});

