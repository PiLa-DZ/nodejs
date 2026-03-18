# User-Specified Errors (Custom Errors)

## 1. Why Create Custom Errors?

Using `throw new Error("Invalid Password")` is "Programmer Laziness."
As a backend developer, you need to distinguish between different types
of failures:

- **Validation Errors:** User typed something wrong.
- **Authentication Errors:** User isn't logged in.
- **Database Errors:** The query failed.

---

## 2. The Implementation (ES6 Classes)

To create a custom error, you extend the built-in `Error` class.
This ensures you still get a **stack trace**
(the line number where it crashed).

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message); // Pass message to the parent Error class
    this.name = "ValidationError"; // Identify the error type
    this.statusCode = 400; // Custom property for HTTP status
  }
}

// How to use it:
function registerUser(user) {
  try {
    if (!user.email.includes("@")) {
      throw new ValidationError("That is not a valid email address!");
    }
  } catch (err) {
    console.log(`Error Message: ${err.message}`);
    console.log(`Error Type: ${err.name}`);
    console.log(`Error statusCode: ${err.statusCode}`);
    console.error(err);
  }
}

registerUser({ email: "name example.com" });

// Error Message: That is not a valid email address!
// Error Type: ValidationError
// Error statusCode: 400
// ValidationError: That is not a valid email address!
//     at registerUser (/home/nabil/Desktop/app.js:13:13)
//     at Object.<anonymous> (/home/nabil/Desktop/app.js:23:1)
//     at Module._compile (node:internal/modules/cjs/loader:1811:14)
//     at Object..js (node:internal/modules/cjs/loader:1951:10)
//     at Module.load (node:internal/modules/cjs/loader:1532:32)
//     at Module._load (node:internal/modules/cjs/loader:1334:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47 {
//   statusCode: 400
// }
```

---

## 3. The "Base AppError" Pattern

In professional Node.js backends,
we usually create a single "Base" error
class that handles all the heavy lifting,
then extend it for specific cases.

```js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true; // Marks this as a "known" error

    Error.captureStackTrace(this, this.constructor);
  }
}

// Now creating specific errors is easy:
class AuthError extends AppError {
  constructor(message) {
    super(message || "You are not authorized", 401);
  }
}

try {
  throw new AuthError("Wrong Sudo Password");
} catch (err) {
  console.error(err);
}

// AuthError: Wrong Sudo Password
//     at Object.<anonymous> (/home/nabil/Desktop/app.js:20:9)
//     at Module._compile (node:internal/modules/cjs/loader:1811:14)
//     at Object..js (node:internal/modules/cjs/loader:1951:10)
//     at Module.load (node:internal/modules/cjs/loader:1532:32)
//     at Module._load (node:internal/modules/cjs/loader:1334:12)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
//     at node:internal/main/run_main_module:33:47 {
//   statusCode: 401,
//   status: 'fail',
//   isOperational: true
// }
```

---

## 4. Identifying Errors with instanceof

The biggest benefit of user-specified errors is
how you handle them in your catch blocks.
You can check the "type" of error to decide what to do next.

```js
try {
  await performAction();
} catch (err) {
  if (err instanceof ValidationError) {
    // Tell the user exactly what they did wrong
    res.status(err.statusCode).send(err.message);
  } else if (err instanceof AuthError) {
    // Redirect to login page
    res.redirect("/login");
  } else {
    // This is an unknown system error (like a DB crash)
    console.error("CRITICAL ERROR:", err);
    res.status(500).send("Something went very wrong.");
  }
}
```
