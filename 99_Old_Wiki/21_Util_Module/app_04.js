// *** String Formatting and Inspection ***
// *** The Util module provides powerful tools for formatting strings and inspecting objects, 
//     which are particularly useful for logging and debugging. ***
// *** util.format(format[, ...args]) ***
// *** Returns a formatted string using the first argument as a printf-like format string. ***
// *** This is similar to console.log() but returns the formatted string instead of printing it. ***
// *** Format Specifiers: ***
// ***     %s - String ***
// ***     %d - Number (both integer and float) ***
// ***     %i - Integer ***
// ***     %f - Floating point value ***
// ***     %j - JSON (replaced with '[Circular]' if the argument contains circular references) ***
// ***     %o - Object (inspect the object) ***
// ***     %O - Object (inspect the object, with full detail) ***
// ***     %% - Single percent sign ('%') ***

const util = require('util');

// Basic formatting
const formatted = util.format('Hello, %s!', 'World');
console.log(formatted); // 'Hello, World!'

// Multiple placeholders
const multiFormatted = util.format(
  'My name is %s. I am %d years old and I love %s.',
  'Kai',
  30,
  'Node.js'
);
console.log(multiFormatted);
// 'My name is Kai. I am 30 years old and I love Node.js.'

// Available specifiers
const specifiers = util.format(
  'String: %s, Number: %d, JSON: %j, Character: %c',
  'hello',
  42,
  { name: 'Object' },
  65  // ASCII code for 'A'
);
console.log(specifiers);

// Extra arguments are concatenated with spaces
const extra = util.format('Hello', 'World', 'from', 'Node.js');
console.log(extra); // 'Hello World from Node.js'
