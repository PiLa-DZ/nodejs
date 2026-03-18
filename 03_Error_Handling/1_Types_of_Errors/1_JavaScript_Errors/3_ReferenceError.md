# JavaScript ReferenceError: The Scope Search Failure

## 1. What triggers a ReferenceError?

A `ReferenceError` is thrown by the JavaScript engine
when the **Scope Chain** lookup reaches the Global Scope
and still cannot find a declaration
for the identifier you are using.

### Key Properties

- **`name`**: Always `ReferenceError`.
- **`message`**: Usually "X is not defined".
- **`stack`**: Shows exactly where the engine looked and failed.

---

## 2. Common Scenarios

### A. Using an Undeclared Variable

This is the most basic case. You try to use a name that the engine has never
seen before.

```javascript
console.log(kernelVersion);
// ReferenceError: kernelVersion is not defined
```
