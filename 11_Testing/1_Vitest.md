# Vitest: The Modern Testing Standard

In 2026, Vitest has largely overtaken Jest as
the preferred testing framework for Node.js
and frontend applications.

While Jest was the "industry standard" for a decade,
Vitest is designed for the modern ESM (ECMAScript Modules) era.

If you are using Vite as your build tool, Vitest is a "no-brainer"
because it uses the same configuration, plugins,
and transformation pipeline as your app.
Even in pure backend Node.js projects,
it is favored for its speed and zero-config TypeScript support.

---

## 1. Why Vitest is the "New King"

The shift to Vitest isn't just about hype;
it's about solving the "Configuration Hell"
that plagued earlier frameworks.

- Native ESM & TypeScript:
  No more babel-jest or ts-jest.
  Vitest understands .ts, .jsx,
  and ESM imports out of the box using esbuild.

- Shared Config:
  If you have a vite.config.ts, Vitest reads it.
  Your aliases (e.g., @/models)
  work in tests exactly as they do in your source code.

- Blazing Speed:
  It uses a worker-thread pool for parallel execution
  and only re-runs tests affected by your latest file changes.

- Jest Compatible:
  It uses the same describe, it, and expect syntax.
  Migrating from Jest usually involves changing jest.mock to vi.mock.

---

## 2. Essential Vitest Features

### A. The Interactive UI (--ui)

Vitest comes with a beautiful, built-in web dashboard.
Instead of squinting at terminal logs,
you can see your test suite, execution times,
and even Module Graphs in your browser.

Command: `npx vitest --ui`

### B. In-Source Testing

Inspired by Rust,
Vitest allows you to write tests directly inside your source code file.
This is perfect for small utility functions
where you don't want to create a separate .test.ts file.

```ts
// math.ts
export function add(a: number, b: number) {
  return a + b;
}

// Only runs during testing, stripped out in production builds
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest;
  it("adds numbers correctly", () => {
    expect(add(2, 2)).toBe(4);
  });
}
```

### C. Type Testing

Vitest allows you to write tests for your TypeScript types.
You can assert that a function returns a specific type,
ensuring your API contracts don't break during refactors.

```js
import { expectTypeOf, test } from 'vitest';

test('my types are correct', () => {
  expectTypeOf(fetchUser).returns.toMatchTypeOf<Promise<User>>();
});
```

---

## 3. Comparison: Vitest vs. Jest (2026)

| Feature       | Jest 30               | Vitest 4.x                       |
| ------------- | --------------------- | -------------------------------- |
| Startup Speed | Slow (Heavy overhead) | Instant (Vite-powered)           |
| ESM Support   | Experimental/Complex  | Native / First-class             |
| TypeScript    | Needs ts-jest/Babel   | Zero-config                      |
| Watch Mode    | Good                  | Great (HMR for tests)            |
| Global API    | On by default         | Off by default (Better for IDEs) |
| Arch Analogy  | A heavy DE (GNOME)    | A fast Window Manager (Sway)     |

---

## 4. Basic Setup in Node.js

On your Arch machine,
setting up Vitest is a single command.

1. Install: `npm install -D vitest`

2. Add Script: Update `package.json`

```json
"scripts": { "test": "vitest" }
```

1. Configure (Optional): Create `vitest.config.ts`

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // Use 'describe' without importing it
    environment: "node",
  },
});
```
