# JavaScript RangeError: The Boundary Watcher

| Cause      | Example          | Fix                                  |
| ---------- | ---------------- | ------------------------------------ |
| Array Size | new Array(-5)    | Ensure length is 0 or positive.      |
| Recursion  | Infinite loops   | Add a "Base Case" to stop recursion. |
| Precision  | num.toFixed(200) | Keep digits within 0-100.            |

## 1. What triggers a RangeError?

A `RangeError` is thrown when you pass a number to a function
or an operation that is outside the "legal" range for that specific case.

### Key Properties

- **`name`**: Always `RangeError`.
- **`message`**: Describes which limit was hit (e.g., "Invalid array length").
- **`stack`**: Shows where the boundary was crossed.

---

## 2. Common Scenarios

### A. Invalid Array Length

JavaScript arrays have a maximum size (approximately 4.29 billion elements).
If you try to set a length that is negative or exceeds this, you hit a
RangeError.

```javascript
// Negative length is illegal
const myLogs = new Array(-1);
// RangeError: Invalid array length

// Too large for the 32-bit unsigned integer limit
const massiveData = new Array(Math.pow(2, 32));
// RangeError: Invalid array length
```

### B. Numeric Formatting

Functions like .toFixed() (decimal points) or .toPrecision() have
strict limits (usually between 1 and 100).

```js
const pi = 3.14159;
console.log(pi.toFixed(200));
// RangeError: toFixed() digits argument must be between 0 and 100
```

### C. Stack Overflow (Recursion)

This is the "Arch User's Nightmare." If a function calls itself too
many times without a "base case" to stop, it exhausts the Call Stack memory.

```js
function recurseForever() {
  recurseForever(); // No exit condition!
}

recurseForever();
// RangeError: Maximum call stack size exceeded
```

## 3. Handling RangeErrors

Since RangeErrors are often caused by dynamic data
(like a user inputting a number),
you should validate the range before processing.

```js
function createBuffer(size) {
  try {
    if (size < 0 || size > 1024 * 1024) {
      throw new RangeError("Buffer size must be between 0 and 1MB");
    }
    return new Array(size);
  } catch (err) {
    if (err instanceof RangeError) {
      console.error("Memory Allocation Issue:", err.message);
      return new Array(0); // Fallback to empty
    }
  }
}
```

## 4. RangeError vs. TypeError

It is easy to confuse these two. Here is the rule of thumb:

- TypeError:
  The "Type" is wrong (e.g., passing a String where a Number was expected).

- RangeError:
  The "Type" is correct (it's a Number), but the Value is "out of bounds."

| Scenario           | Error Type                            |
| ------------------ | ------------------------------------- |
| (1).toFixed("two") | TypeError (String is not a valid arg) |
| (1).toFixed(500)   | RangeError (500 is too large)         |
