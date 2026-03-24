// *** Basic Readline Methods ***
// *** The Readline module provides several methods for interacting with the user. Here are the most commonly used ones: ***
// *** 3. rl.write(data[, key]) ***
// *** Writes data to the output stream. The optional key parameter can be used to simulate key presses. ***
// *** Write Example ***

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display a welcome message
rl.write('Welcome to the CLI Application!\n');
rl.write('='.repeat(30) + '\n\n');

// Pre-fill a default value
rl.question('Enter your username: ', (username) => {
  console.log(`Hello, ${username}!`);

  // Simulate typing a default value
  rl.write('default@example.com');

  // Move cursor to the beginning of the line
  rl.write(null, { ctrl: true, name: 'a' });

  rl.question('Enter your email: ', (email) => {
    console.log(`Your email is: ${email}`);
    rl.close();
  });
});

