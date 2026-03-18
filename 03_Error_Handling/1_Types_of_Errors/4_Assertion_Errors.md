# Assertion Errors in Node.js

An **Assertion Error** is a specific type of error
thrown when an assertion fails.
It is primarily used during **Testing** and **Validation**
to ensure that the code is behaving exactly as the developer intended.

---

## 1. The `node:assert` Module

Node.js has a built-in module called `assert`
that provides functions for verifying invariants.
When an assertion fails,
it throws an `AssertionError` which is a subclass of the standard `Error` object.

- **Primary Purpose:**
  To fail early and loudly if the program state is invalid.

- **Metadata:**
  Contains properties like `actual`, `expected`,
  and `operator` to show exactly what went wrong.

---

## 2. Common Assertion Methods

As a backend developer,
you will use these to "sanity check" your data
during development or in your test suites (like Mocha or Jest).

| Method              | Purpose                            | Example                                |
| :------------------ | :--------------------------------- | :------------------------------------- |
| `assert(value)`     | Checks if `value` is truthy.       | `assert(user.isAdmin);`                |
| `strictEqual(a, b)` | Checks if `a === b`.               | `assert.strictEqual(res.code, 200);`   |
| `deepStrictEqual()` | Checks if objects/arrays match.    | `assert.deepStrictEqual(arr, [1,2]);`  |
| `throws()`          | Checks if a block throws an error. | `assert.throws(() => parse(badData));` |

---

## 3. Anatomy of an Assertion Error

When an assertion fails,
Node.js provides a very detailed error message
that helps you identify the "drift" between reality and your expectation.

```javascript
const assert = require("node:assert");

try {
  const diskSpace = 10; // GB
  const required = 50; // GB

  assert.strictEqual(diskSpace, required, "Not enough disk space for Arch!");
} catch (err) {
  console.log(err.name); // 'AssertionError'
  console.log(err.message); // 'Not enough disk space for Arch!'
  console.log(err.actual); // 10
  console.log(err.expected); // 50
  console.log(err.operator); // 'strictEqual'
}
```

---

## 4. When to use Assertion Errors?

It is important to distinguish between
Assertion Errors and Standard Errors:

- Use Assertions for:
  Internal logic checks
  (e.g., "This function should never receive a null ID").
  If an assertion fails here,
  it means there is a bug in your code.

- Use Standard Errors for:
  External factors
  (e.g., "User entered wrong password" or "Database is down").
  These are operational issues, not logic bugs.
