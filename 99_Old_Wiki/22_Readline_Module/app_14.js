// *** Building a Simple REPL ***
// *** A Read-Eval-Print Loop (REPL) is an interactive programming environment that reads user input, evaluates it, and prints the result. ***
// *** The Readline module is perfect for building custom REPLs. Here's a comprehensive guide to creating your own: ***
// *** Key Components of a REPL: ***
// ***     Read: Accept user input line by line ***
// ***     Eval: Parse and evaluate the input ***
// ***     Print: Display the result or any output ***
// ***     Loop: Return to the input prompt for the next command ***
// ***     Special Commands: Handle commands like .help, .exit ***
// ***     Error Handling: Gracefully handle syntax errors and exceptions ***

const readline = require('readline');
const vm = require('vm');

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'js> '
});

// Create context for evaluating code
const context = vm.createContext({
  console,
  Number,
  String,
  Array,
  Object,
  // Add any other global variables you want to make available
  // You can also add your own functions
  add: (a, b) => a + b,
  multiply: (a, b) => a * b
});

console.log('Simple JavaScript REPL (Press Ctrl+C to exit)');
console.log('Type JavaScript code and press Enter to evaluate');

// Show the prompt
rl.prompt();

// Track multi-line input
let buffer = '';

// Handle input
rl.on('line', (line) => {
  // Add the line to our buffer
  buffer += line;

  try {
    // Try to evaluate the code
    const result = vm.runInContext(buffer, context);

    // Display the result
    console.log('\x1b[33m%s\x1b[0m', '=> ' + result);

    // Reset the buffer after successful evaluation
    buffer = '';
  } catch (error) {
    // If it's a syntax error and might be due to incomplete input,
    // continue collecting input
    if (error instanceof SyntaxError &&
      error.message.includes('Unexpected end of input')) {
      // Continue in multi-line mode
      rl.setPrompt('... ');
    } else {
      // It's a real error, show it and reset buffer
      console.error('\x1b[31m%s\x1b[0m', 'Error: ' + error.message);
      buffer = '';
      rl.setPrompt('js> ');
    }
  }

  rl.prompt();
});

// Handle Ctrl+C
rl.on('SIGINT', () => {
  if (buffer.length > 0) {
    // If there's pending input, clear it
    console.log('\nInput cleared');
    buffer = '';
    rl.setPrompt('js> ');
    rl.prompt();
  } else {
    // Otherwise exit
    rl.question('\nAre you sure you want to exit? (y/n) ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        console.log('Goodbye!');
        rl.close();
      } else {
        rl.prompt();
      }
    });
  }
});

rl.on('close', () => {
  console.log('REPL closed');
  process.exit(0);
});
