// *** Advanced Type System Features ***
// *** TypeScript's type system provides powerful tools for creating robust and maintainable Node.js applications. ***
// *** Here are the key features: ***
// 5. Type Inference and Type Guards
// TypeScript's type inference and type guards help create type-safe code with minimal annotations:

// Type inference with variables
const name = 'Alice'; // TypeScript infers type: string
const age = 30; // TypeScript infers type: number
const active = true; // TypeScript infers type: boolean

// Type inference with arrays
const numbers = [1, 2, 3]; // TypeScript infers type: number[]
const mixed = [1, 'two', true]; // TypeScript infers type: (string | number | boolean)[]

// Type inference with functions
function getUser() {
  return { id: 1, name: 'Alice' }; // Return type inferred as { id: number; name: string; }
}

const user = getUser(); // user inferred as { id: number; name: string; }
console.log(user.name); // Type checking works on inferred properties
