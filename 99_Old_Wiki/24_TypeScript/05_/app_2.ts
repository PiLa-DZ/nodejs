// *** Advanced TypeScript Patterns for Node.js ***
// *** These patterns help build more maintainable and type-safe Node.js applications: ***
// *** 2. Advanced Utility Types ***

// Built-in utility types with examples
interface User {
  id: number;
  name: string;
  email?: string;
  createdAt: Date;
}
// Create a type with specific properties as required
type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;
type UserCreateInput = AtLeast<User, 'name' | 'email'>; // Only name is required

// Create a type that makes specific properties required
WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
type UserWithEmail = WithRequired<User, 'email'>;

// Extract function return type as a type
type UserFromAPI = Awaited<ReturnType<typeof fetchUser>>;
