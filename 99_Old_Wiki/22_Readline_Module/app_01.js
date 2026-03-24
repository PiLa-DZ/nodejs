// *** Getting Started with Readline ***
// *** Here's a quick example of using the Readline module to create a simple interactive command-line application: ***
// *** Basic Interactive Prompt ***

const readline = require('readline');

// Create interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask a question and handle the response
rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);

  // Ask follow-up question
  rl.question('How old are you? ', (age) => {
    console.log(`In 5 years, you'll be ${parseInt(age) + 5} years old.`);

    // Close the interface when done
    rl.close();
  });
});

// Handle application exit
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
