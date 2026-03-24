// *** util.inspect.custom ***
// *** Symbol used to customize object inspection. ***
// *** This allows objects to define their own string representation when inspected. ***
// *** Best Practices: ***
// ***     Use util.inspect.custom for custom inspection rather than inspect() method for better compatibility ***
// ***     Keep the custom inspection output concise and informative ***
// ***     Include important object state in the output ***
// ***     Consider performance for frequently inspected objects ***
// ***     Handle circular references to prevent infinite recursion ***

const util = require('util');

// Class with custom inspection
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._private = 'hidden information';
  }
  
  // Custom inspect method
  [util.inspect.custom](depth, options) {
    return `Person(${this.name}, ${this.age})`;
  }
}
const kai = new Person('Kai', 30);

// Custom inspection is used
console.log(util.inspect(kai)); // Person(Kai, 30)

// Directly using console.log also uses custom inspection
console.log(kai); // Person(Kai, 30)
