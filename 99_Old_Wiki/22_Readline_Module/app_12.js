// *** Tab Completion ***
// *** Tab completion enhances the user experience by providing command and file path suggestions. The Readline module allows you to implement custom completion logic: ***
// *** How Tab Completion Works: ***
// ***     User presses the Tab key ***
// ***     Readline calls your completer function with the current line and cursor position ***
// ***     Your function returns completion suggestions ***
// ***     Readline displays the completions or auto-completes if there's only one match ***

const readline = require('readline');
const fs = require('fs');
const path = require('path');

// Available commands for autocompletion
const commands = ['help', 'exit', 'list', 'clear', 'info', 'version', 'history'];

// Create the readline interface with a completer function
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'myapp> ',
  completer: function(line) {
    // Command completion
    if (!line.includes(' ')) {
      const hits = commands.filter(c => c.startsWith(line));

      // Show all completions if none matches
      return [hits.length ? hits : commands, line];
    }

    // File path completion (for commands like "list ")
    if (line.startsWith('list ')) {
      const dir = line.split(' ')[1] || '.';
      try {
        let completions = fs.readdirSync(dir);

        // Add trailing slash to directories
        completions = completions.map(file => {
          const fullPath = path.join(dir, file);
          return fs.statSync(fullPath).isDirectory() ? file + '/' : file;
        });

        const hits = completions.filter(c => c.startsWith(line.split(' ')[1] || ''));
        return [hits.length ? hits : completions, line.split(' ')[1] || ''];
      } catch (err) {
        return [[], line];
      }
    }

    return [[], line];
  }
});

// Set the prompt
rl.prompt();

// Handle commands
rl.on('line', (line) => {
  line = line.trim();

  switch (true) {
    case line === 'help':
      console.log('Available commands:');
      commands.forEach(cmd => console.log(` ${cmd}`));
      break;

    case line === 'exit':
      console.log('Goodbye!');
      rl.close();
      return;

    case line.startsWith('list'):
      const dir = line.split(' ')[1] || '.';
      try {
        const files = fs.readdirSync(dir);
        console.log(`Contents of ${dir}:`);
        files.forEach(file => {
          const stats = fs.statSync(path.join(dir, file));
          console.log(` ${file}${stats.isDirectory() ? '/' : ''}`);
        });
      } catch (err) {
        console.error(`Error listing directory: ${err.message}`);
      }
      break;

    case line === 'clear':
      console.clear();
      break;

    case line === 'info':
      console.log('Node.js CLI Example');
      console.log(`Version: 1.0.0`);
      break;

    case line === 'version':
      console.log(`Node.js version: ${process.version}`);
      break;

    case line === 'history':
      // Note: This requires storing history manually
      console.log('History feature not fully implemented.');
      break;

    case line === '':
      // Do nothing for empty lines
      break;

    default:
      console.log(`Unknown command: ${line}`);
      console.log('Type "help" for available commands');
    }

    rl.prompt();
}).on('close', () => {
    console.log('CLI terminated.');
    process.exit(0);
});

// Handle Ctrl+C
rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (y/n) ', (answer) => {
      if (answer.toLowerCase() === 'y') {
        rl.close();
      } else {
        rl.prompt();
      }
  });
});
