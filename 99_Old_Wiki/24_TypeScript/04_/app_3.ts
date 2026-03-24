// *** Advanced Type System Features ***
// *** TypeScript's type system provides powerful tools for creating robust and maintainable Node.js applications. ***
// *** Here are the key features: ***
// 3. Advanced Generics

// Generic function with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Generic interface with default type
interface PaginatedResponse<T = any> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

// Using generic types with async/await in Node.js
async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return response.json();
}
