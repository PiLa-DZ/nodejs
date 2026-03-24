# node:test: The Native Node.js Test Runner

In 2026,
the node:test module has transitioned
from a "cool new experiment" to a stable,
production-ready feature of the Node.js core.

For a backend developer on Arch Linux,
this is the "Zen" choice:
it requires zero external dependencies,
no node_modules bloat for testing,
and zero configuration files.

If you want your testing suite to be as fast
as the Node.js runtime itself,
node:test is the answer.

---

## 1. Why use the Native Runner?

The primary goal of node:test is to
eliminate "Dependency Fatigue."
You no longer need to decide between Jest, Mocha, or Vitest
for basic to mid-sized projects.

- Zero-Install:
  It comes pre-installed with Node.js.
  Your package.json stays clean.

- Instant Execution:
  Since there is no transpilation layer
  (like Babel) or heavy framework wrap,
  tests start and finish in milliseconds.

- Native TypeScript Support:
  In 2026, Node.js natively supports stripping TypeScript types
  (via the --experimental-strip-types or similar flags),
  allowing node:test to run .ts files directly.

- Standardized:
  It follows the TAP (Test Anything Protocol),
  making it compatible with almost all CI/CD pipelines.

---

## 2. Basic Syntax

The syntax is intentionally familiar.
If you’ve used Jest or Mocha,
you already know how to use node:test.

```js
import { test, describe, it } from "node:test";
import assert from "node:assert"; // Use the native assert module

describe("Arch System Utils", () => {
  it("should format bytes correctly", () => {
    const result = formatBytes(1024);
    assert.strictEqual(result, "1KB");
  });

  test("asynchronous service check", async () => {
    const status = await checkService("ssh");
    assert.ok(status.active);
  });
});
```

---

## 3. Advanced Built-in Features

In 2026, the native runner is surprisingly feature-complete:

### A. Mocking & Spying

You don't need sinon or jest.fn().
The node:test module includes a built-in mock object.

```js
import { mock, test } from "node:test";
import assert from "node:assert";

test("spying on a function", (t) => {
  const sayHello = mock.fn((name) => `Hello ${name}`);

  sayHello("Arch");

  assert.strictEqual(sayHello.mock.callCount(), 1);
  assert.strictEqual(sayHello.mock.calls[0].arguments[0], "Arch");
});
```

### B. Watch Mode & Coverage

You can run your tests in watch mode or generate coverage
reports directly from the CLI without extra packages:

- Watch Mode: `node --test --watch`

- Coverage: `node --test --experimental-test-coverage`

---

## 4. Comparison Table: Native vs. The Giants

| Feature      | node:test        | Vitest           | Jest             |
| ------------ | ---------------- | ---------------- | ---------------- |
| Installation | Built-in         | npm install      | npm install      |
| Config File  | None             | vitest.config.ts | jest.config.js   |
| Speed        | Fastest          | Very Fast        | Moderate         |
| Mocking      | Basic (Built-in) | Advanced         | Advanced         |
| TypeScript   | Native (2026)    | Integrated       | Needs ts-jest    |
| Arch Analogy | Pure ALSA        | PipeWire         | PulseAudio (Old) |

---

## Summary

| Concept       | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| node:test     | "The core module providing test, describe, and it."                   |
| node:assert   | The companion module for validation (use strict mode!).               |
| before/after  | "Standard lifecycle hooks (beforeEach, afterEach) are all supported." |
| test:coverage | The internal tool for seeing which lines of code are tested.          |
