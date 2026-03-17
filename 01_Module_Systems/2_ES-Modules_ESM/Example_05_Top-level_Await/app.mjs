// data-loader.mjs
// This would cause an error in CommonJS or in a script
// But works at the top level in an ES Module

console.log('Loading data...');

// Top-level await - the module's execution pauses here
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();

console.log('Data loaded!');

export { data };

// When another module imports this one, it will only get the exports
// after all the top-level await operations have completed 
