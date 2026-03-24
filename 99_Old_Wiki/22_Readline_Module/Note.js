// Common Options:
input:                   // The Readable stream to listen to (default: process.stdin)
output:                  // The Writable stream to write to (default: process.stdout)
prompt:                  // The prompt string to use (default: '> ')
terminal:                // If true, treats the output as a TTY (default: output.isTTY)
historySize:             // Maximum number of history entries (default: 30)
removeHistoryDuplicates: // If true, removes duplicate history entries (default: false)
completer:               // Optional function for tab auto-completion
crlfDelay:               // Delay between CR and LF (default: 100ms)
escapeCodeTimeout:       // Time to wait for character escape sequences (default: 500ms)
