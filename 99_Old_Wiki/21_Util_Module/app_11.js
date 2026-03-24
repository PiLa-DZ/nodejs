// *** util.types ***
// *** The util.types provides type checking functions for various JavaScript types and Node.js-specific objects: ***

const util = require('util');

// JavaScript built-in types
console.log('util.types.isDate(new Date()):',
  util.types.isDate(new Date()));
console.log('util.types.isRegExp(/test/):',
  util.types.isRegExp(/test/));
console.log('util.types.isPromise(Promise.resolve()):',
  util.types.isPromise(Promise.resolve()));

// Node.js-specific types
console.log('util.types.isArrayBuffer(new ArrayBuffer(0)):',
  util.types.isArrayBuffer(new ArrayBuffer(0)));
console.log('util.types.isSharedArrayBuffer(new SharedArrayBuffer(0)):',
  util.types.isSharedArrayBuffer(new SharedArrayBuffer(0)));
console.log('util.types.isUint8Array(new Uint8Array()):',
  util.types.isUint8Array(new Uint8Array()));

// More advanced types
console.log('util.types.isProxy(new Proxy({}, {})):',
  util.types.isProxy(new Proxy({}, {})));
console.log('util.types.isExternal(Requiring C++ binding):',
  'Not demonstrated in this example');
