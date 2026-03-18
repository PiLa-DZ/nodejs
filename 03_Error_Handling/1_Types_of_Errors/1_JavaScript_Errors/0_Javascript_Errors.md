# JavaScript Errors: The Language Level

## All

1. EvalError
2. RangeError
3. ReferenceError
4. SyntaxError
5. TypeError
6. URIError

## The Anatomy of a JS Error

Every standard JavaScript error is an instance of the `Error` object.
It contains two primary properties that you will use constantly:

1. **`name`**: The type of error (e.g., `TypeError`, `ReferenceError`).
2. **`message`**: A human-readable description of what went wrong.
3. **`stack`**: The "Stack Trace."
   This is the history of which functions were called leading up to the crash.

---

## Summary Table of Core JavaScript Errors

| Error Type           | Primary Cause                            |
| :------------------- | :--------------------------------------- |
| **`SyntaxError`**    | Invalid code grammar/structure.          |
| **`ReferenceError`** | Accessing an undeclared variable.        |
| **`TypeError`**      | Incompatible operation on a type.        |
| **`RangeError`**     | Value is outside allowed numeric bounds. |
| **`URIError`**       | Malformed encoding/decoding in URIs.     |
| **`EvalError`**      | Error in `eval()` (mostly legacy).       |

| Error Type           | Typical Example    |
| :------------------- | :----------------- |
| **`SyntaxError`**    | `const x = ;`      |
| **`ReferenceError`** | `console.log(x);`  |
| **`TypeError`**      | `null.f();`        |
| **`RangeError`**     | `new Array(-1);`   |
| **`URIError`**       | `decodeURI('%');`  |
| **`EvalError`**      | `new EvalError();` |

| Error Type           | When it's Thrown                     |
| :------------------- | :----------------------------------- |
| **`SyntaxError`**    | **Parsing Phase** (Before execution) |
| **`ReferenceError`** | **Execution Phase** (Runtime)        |
| **`TypeError`**      | **Execution Phase** (Runtime)        |
| **`RangeError`**     | **Execution Phase** (Runtime)        |
| **`URIError`**       | **Execution Phase** (Runtime)        |
| **`EvalError`**      | **Manual** (Rarely by Engine)        |

## Like Linux commands

- **SyntaxError:**
  A broken `bash` script that won't even start because of a missing `done` or `fi`.
- **ReferenceError:**
  Trying to run a command that isn't installed in your `$PATH`.
- **TypeError:**
  Trying to `cd` into a file instead of a directory.
- **RangeError:**
  Trying to create a file larger than the available disk space.
- **URIError:**
  Passing a malformed, non-UTF8 string to a terminal that only supports UTF-8.
- **EvalError:**
  An old, deprecated flag in a legacy configuration file that no longer does anything.
