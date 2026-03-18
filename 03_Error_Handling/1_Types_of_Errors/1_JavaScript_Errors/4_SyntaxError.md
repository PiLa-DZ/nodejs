# JavaScript SyntaxError: The Parsing Failure

## 1. What triggers a SyntaxError?

Unlike other errors (like `TypeError` or `ReferenceError`)
which happen while the code is running,

a `SyntaxError` usually happens **at compile time**.
If your script has a syntax error,
**none** of the code in that file will execute.

### Key Properties

- **`name`**: Always `SyntaxError`.
- **`message`**: Describes the specific grammatical mistake (e.g., "Unexpected token").
- **`stack`**: Shows the line and character where the parser got stuck.

---

## 2. Common Scenarios

### A. Missing Brackets or Parentheses

The most frequent mistake. Every opening `(` or `{` must have a
matching `)` or `}`.

```javascript
function install() {
  console.log("Arch Linux"
// SyntaxError: Unexpected token '}'
```
