// *** Multi-Line Input ***
// *** The Readline module excels at handling multi-line input, making it perfect for text editors, code editors, or any application that needs to collect multiple lines of text from users. Here's how to implement it effectively: ***
// *** Multi-Line Input Strategies: ***
// ***     End Marker: Use a special sequence (like .end) to signal the end of input ***
// ***     Bracket Matching: Automatically detect when all opened brackets/parentheses are closed ***
// ***     Dedicated Command: Provide a specific command to submit multi-line input ***
// ***     Timeout-Based: Use a timer to detect when the user is done typing ***

const readline = require('readline');

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

console.log('Enter your multi-line input. Type ".end" on a new line to finish:');
rl.prompt();

// Store lines
const lines = [];

// Handle input
rl.on('line', (line) => {
   // Check for end command
   if (line.trim() === '.end') {
     console.log('\nYour complete input:');
     console.log('-'.repeat(30));
     console.log(lines.join('\n'));
     console.log('-'.repeat(30));

     // Process the input (example: count words)
     const text = lines.join(' ');
     const wordCount = text.split(/\s+/).filter(Boolean).length;
     const charCount = text.length;

     console.log(`\nStatistics:`);
     console.log(`Lines: ${lines.length}`);
     console.log(`Words: ${wordCount}`);
     console.log(`Characters: ${charCount}`);

     rl.close();
     return;
  }

  // Add line to collection
  lines.push(line);
  rl.prompt();
});
