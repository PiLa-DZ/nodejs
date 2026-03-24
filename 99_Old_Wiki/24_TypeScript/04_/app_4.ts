// *** Advanced Type System Features ***
// *** TypeScript's type system provides powerful tools for creating robust and maintainable Node.js applications. ***
// *** Here are the key features: ***
// 4. Mapped and Conditional Types

// Mapped types
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// Conditional types
type NonNullableUser = NonNullable<User | null | undefined>; // User

// Type inference with conditional types
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function getUser() {
  return { id: 1, name: 'Alice' } as const;
}
type UserReturnType = GetReturnType<typeof getUser>; // { readonly id: 1; readonly name: "Alice"; }
