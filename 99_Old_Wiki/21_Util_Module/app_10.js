// *** Type Checking Utilities ***
// *** The Util module provides comprehensive type checking utilities that 
//     are more reliable than JavaScript's typeof operator, 
//     especially for built-in objects and Node.js-specific types. ***
// *** Why use util.types? ***
// ***     More accurate than typeof for many built-in types ***
// ***     Consistent behavior across Node.js versions ***
// ***     Works with Node.js-specific types like Buffer ***
// ***     Better performance than manual type checking in many cases ***
// ***     Handles edge cases properly (e.g., cross-realm objects) ***

const util = require('util');

// Example values
const values = [
  'string',
  123,
  true,
  Symbol('symbol'),
  { key: 'value' },
  [1, 2, 3],
  null,
  undefined,
  () => {},
  BigInt(123),
  new Date(),
  /regex/,
  Buffer.from('buffer'),
  new Error('error')
];

// Check types for each value
values.forEach(value => {
  console.log(`Value: ${util.inspect(value)}`);
  console.log(`- isArray: ${util.types.isArrayBuffer(value)}`);
  console.log(`- isDate: ${util.types.isDate(value)}`);
  console.log(`- isRegExp: ${util.types.isRegExp(value)}`);
  console.log(`- isNativeError: ${util.types.isNativeError(value)}`);
  console.log(`- isPromise: ${util.types.isPromise(value)}`);
  console.log(`- isPrimitive: ${util.isPrimitive(value)}`);
  console.log(`- isString: ${util.isString(value)}`);
  console.log(`- isNumber: ${util.isNumber(value)}`);
  console.log(`- isBoolean: ${util.isBoolean(value)}`);
  console.log(`- isSymbol: ${util.types.isSymbol(value)}`);
  console.log(`- isNull: ${value === null}`);
  console.log(`- isUndefined: ${value === undefined}`);
  console.log(`- isFunction: ${util.types.isFunction(value)}`);
  console.log(`- isBuffer: ${Buffer.isBuffer(value)}`);
  console.log('---');
});
