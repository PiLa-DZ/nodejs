// *** util.inspect(object[, options]) ***
// *** Returns a string representation of an object, useful for debugging. ***
// *** This is what Node.js uses internally for printing objects to the console. ***
// *** Common Use Cases: ***
// ***     Debugging complex objects ***
// ***     Creating human-readable object representations ***
// ***     Logging objects with circular references ***
// ***     Customizing object display in logs ***
// *** Common Options: ***
// ***     showHidden - Show non-enumerable properties (default: false) ***
// ***     depth - Number of levels to recurse (default: 2, null for unlimited) ***
// ***     colors - Add ANSI color codes (default: false) ***
// ***     customInspect - Use custom inspect functions (default: true) ***
// ***     showProxy - Show Proxy details (default: false) ***
// ***     maxArrayLength - Maximum number of array elements to include (default: 100) ***
// ***     breakLength - Length at which to break object keys (default: 60) ***
// ***     compact - Break properties onto new lines (default: true for arrays, false for objects) ***
// ***     sorted - Sort properties (default: false, true for alphabetical, function for custom sort) ***

const util = require('util');

// Basic usage
const obj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: {
    city: 'New York',
    country: 'USA'
  },
  toString() {
    return `${this.name}, ${this.age}`;
  }
};

// Default inspection
console.log(util.inspect(obj));

// Custom options
console.log(util.inspect(obj, {
  colors: true, // Add ANSI color codes
  depth: 0, // Only inspect the first level
  showHidden: true, // Show non-enumerable properties
  compact: false, // Don't format objects on a single line
  showProxy: true, // Show proxy details
  maxArrayLength: 3, // Limit array elements displayed
  breakLength: 50, // Line break after 50 characters
  sorted: true // Sort object properties alphabetically
}));

// Circular references
const circular = { name: 'Circular' };
circular.self = circular;
console.log(util.inspect(circular));
