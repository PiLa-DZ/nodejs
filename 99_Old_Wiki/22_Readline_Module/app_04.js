// *** Basic Readline Methods ***
// *** The Readline module provides several methods for interacting with the user. Here are the most commonly used ones: ***
// *** 1. rl.question(query, callback) ***
// *** Displays a query to the user and invokes the callback with the user's response. This is one of the most commonly used methods for simple user interactions. ***
// *** Nested Questions Example ***

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

async function userSurvey() {
  try {
    const name = await askQuestion('What is your name? ');
    const age = await askQuestion('How old are you? ');
    const email = await askQuestion('What is your email? ');

    console.log('\n=== User Information ===');
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);

  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    rl.close();
  }
}

userSurvey();

