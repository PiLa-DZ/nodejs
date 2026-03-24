// *** Advanced Type System Features ***
// *** TypeScript's type system provides powerful tools for creating robust and maintainable Node.js applications. ***
// *** Here are the key features: ***
// *** 1. Union and Intersection Types ***

// Union type
function formatId(id: string | number) {
  return `ID: ${id}`;
}

// Intersection type
type User = { name: string } & { id: number };

