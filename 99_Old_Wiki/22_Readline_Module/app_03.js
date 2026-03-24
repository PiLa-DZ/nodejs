// *** Basic Readline Methods ***
// *** The Readline module provides several methods for interacting with the user. Here are the most commonly used ones: ***
// *** 1. rl.question(query, callback) ***
// *** Displays a query to the user and invokes the callback with the user's response. This is one of the most commonly used methods for simple user interactions. ***
// *** Basic Example ***

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});

