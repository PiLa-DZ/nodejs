// *** Using Promises with Readline ***
// *** The Readline module's callback-based API can 
//     be wrapped in promises for more modern, async/await friendly code: ***

const readline = require('readline');

// Create interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promise-based question function
function askQuestion(query) {
  return new Promise(resolve => {
    rl.question(query, resolve);
  });
}

// Using async/await with readline
async function main() {
  try {
    const name = await askQuestion('What is your name? ');
    console.log(`Hello, ${name}!`);

    const age = await askQuestion('How old are you? ');
    console.log(`In 5 years, you'll be ${parseInt(age) + 5} years old.`);

    const location = await askQuestion('Where do you live? ');
    console.log(`${location} is a great place!`);

    console.log('Thank you for your answers!');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    rl.close();
   }
}

// Run the main function
main();
