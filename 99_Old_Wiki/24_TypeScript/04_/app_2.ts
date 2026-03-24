// *** Advanced Type System Features ***
// *** TypeScript's type system provides powerful tools for creating robust and maintainable Node.js applications. ***
// *** Here are the key features: ***
// 2. Type Guards

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return 'swim' in pet;
}
