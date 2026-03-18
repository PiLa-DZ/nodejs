# JavaScript EvalError: The Legacy Exception

## Summary

| Property      | Value / Description                                  |
| ------------- | ---------------------------------------------------- |
| Origin        | Created in the earliest versions of JavaScript.      |
| Modern Status | Mostly deprecated/unused by the engine itself.       |
| Common Use    | Used by developers to flag errors in dynamic code.   |
| Arch Analogy  | Like an old deprecated flag in an obscure C library. |

> [!TIP] 6. Pro-Tip: Avoid eval() entirely

```js
// As a backend developer,
// your goal is to write secure code.
// BUG:  Using eval() is often considered a security "anti-pattern"
// because it can lead to Code Injection attacks.

// TODO: Instead of eval(), use:

// 1. JSON.parse():
// For turning strings into objects.

// 2. Function Constructor:
// If you absolutely must execute code
// dynamically (it is slightly safer as it has its own scope).

// 3. The vm module:
// A built-in Node.js module that allows you to run code
// in a "Virtual Machine" sandbox (much safer for Arch servers).
```

## 1. What is `eval()`?

Before we see the error,
we must understand the "dangerous" command.
`eval()` takes a string and executes it as JavaScript code.

- **Arch Analogy:**
  It is like running `sh -c "some_string"`.
  It is powerful but extremely risky
  if the string comes from an untrusted source (like a user input).

---

## 2. Example: Manual Throwing (The Modern Way)

Since the JavaScript engine itself rarely triggers `EvalError` today,
developers use it manually when building tools that process dynamic
strings or templates.

```javascript
function runDynamicCode(codeString) {
  if (codeString.includes("delete")) {
    // We throw EvalError to signal a policy violation
    // during a dynamic evaluation attempt.
    throw new EvalError("Security Violation: 'delete' is not allowed!");
  }
  return eval(codeString);
}

try {
  runDynamicCode("delete global.process");
} catch (err) {
  console.log(err.name); // "EvalError"
  console.log(err.message); // "Security Violation: 'delete' is not allowed!"
}
// EvalError
// Security Violation: 'delete' is not allowed!
```

### 3. Example: Checking Instance Type

Just like with other errors,
you can use `instanceof` to catch it specifically in a backend environment
where you might be running a plugin system or a template engine.

```js
try {
  // Imagine a complex logic that uses eval()
  throw new EvalError("The dynamic script failed to initialize.");
} catch (e) {
  if (e instanceof EvalError) {
    console.error("Evaluation Error detected:", e.message);
  } else {
    console.error("Standard Error:", e.message);
  }
}
```

## 4. Why is it so rare now?

In the early days of JS,
eval() had many "Illegal" use cases that would trigger this error.
Today, those same mistakes usually throw a TypeError or a SyntaxError instead.

Example of what USED to be an EvalError (but is now a SyntaxError):

```js
// Older browsers might have called this an EvalError
// Modern Node.js/V8 calls this a SyntaxError
eval("var 123variable = 'error';");
```
