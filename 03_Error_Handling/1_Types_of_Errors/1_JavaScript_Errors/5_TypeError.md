# JavaScript TypeError: The Misused Value

## 1. What triggers a TypeError?

A `TypeError` happens during the **Execution Phase**.
The engine knows what the variable is,
but it realizes that what you are asking it to do
is logically impossible for that data type.

### Key Properties

- **`name`**: Always `TypeError`.
- **`message`**: Details the specific failure (e.g., "is not a function").
- **`stack`**: The trace showing where the illegal operation occurred.

---

## 2. Common Scenarios

### A. Accessing Properties of `null` or `undefined`

This is the "Most Famous Error in JavaScript." It happens when you expect
an object but get nothing back.

```javascript
const user = null;
console.log(user.name);
// TypeError: Cannot read properties of null (reading 'name')
```

### B. Calling a Non-Function

This happens when you try to execute a variable as a function (), but
it's actually a string, number, or object.

```js
const version = "6.8.9-arch1-1";
version();
// TypeError: version is not a function
```

### C. Modifying Constant Values

If you try to reassign a variable declared with const, or change a
property on a frozen object.

```js
const distro = "Arch";
distro = "Debian";
// TypeError: Assignment to constant variable.
```

### D. Passing Wrong Arguments to Built-ins

Using a method on a type that doesn't support it.

```js
const uptime = 3600;
uptime.toLowerCase();
// TypeError: uptime.toLowerCase is not a function (Numbers don't have case)
```

## 3. Handling TypeErrors

To prevent these in production, you use Defensive Coding or "Optional
Chaining" (?.), which is a modern JS feature that stops the execution
if a value is nullish.

```js
const user = null;

// The "Arch Way" (Safe and clean)
console.log(user?.profile?.name);
// Returns 'undefined' instead of throwing a TypeError

// The "Traditional Way"
if (user && user.profile) {
  console.log(user.profile.name);
}
```
