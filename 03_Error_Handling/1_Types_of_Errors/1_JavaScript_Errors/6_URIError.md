# JavaScript URIError: The Encoding Guard

In your Arch Linux terminal,
a **URIError** is like trying to `cd` into a directory
using an invalid character encoding
that the filesystem doesn't recognize,
or passing a malformed URL to `curl`.

It occurs when the global URI handling functions
such as `encodeURI()`, `decodeURI()`, `encodeURIComponent()`, or `decodeURIComponent()`
are passed a string that contains an **illegal or malformed percent-encoding sequence**.

---

## 1. What triggers a URIError?

A `URIError` is thrown during the execution of built-in URI functions
when they encounter a `%` character followed by characters that do not
form a valid UTF-8 sequence.

### Key Properties

- **`name`**: Always `URIError`.
- **`message`**: Usually "URI malformed".
- **`stack`**: Points to the exact line where the decoding failed.

---

## 2. Common Scenarios

### A. Malformed Percent-Encoding

The most common cause is a single `%` sign that isn't followed by two
hexadecimal digits, or a sequence that represents an invalid character.

```javascript
try {
  // This fails because % is not followed by two hex digits (0-9, A-F)
  decodeURIComponent("%g1");
} catch (err) {
  console.log(err.name); // "URIError"
  console.log(err.message); // "URI malformed"
}
```

### B. Incomplete Multi-byte Sequences

UTF-8 characters can be multiple bytes long. If you try to decode only
half of a character, the engine throws a URIError.

```js
// A valid emoji might be 4 bytes.
// Decoding only the first byte is illegal.
try {
  decodeURIComponent("%F0");
} catch (err) {
  console.log(err.name); // "URIError"
}
```

## 3. Handling URIErrors

Since URIs often come from external users or APIs
(which might be unreliable),
you should always wrap your decoding logic in a try/catch block
to prevent a malformed URL from crashing your entire Node.js server.

```js
function safeDecode(url) {
  try {
    return decodeURIComponent(url);
  } catch (err) {
    if (err instanceof URIError) {
      console.error("Warning: Received a malformed URL component.");
      return url; // Fallback to raw string
    }
    throw err;
  }
}
```
