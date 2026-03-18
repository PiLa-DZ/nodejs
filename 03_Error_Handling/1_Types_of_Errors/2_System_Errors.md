# Node.js Error Handling: System Errors

1. EACCES - Permission denied
1. EADDRINUSE - Address already in use
1. ECONNRESET - Connection reset by peer
1. EEXIST - File exists
1. EISDIR - Is a directory
1. EMFILE - Too many open files in system
1. ENOENT - No such file or directory
1. ENOTDIR - Not a directory
1. ENOTEMPTY - Directory not empty
1. ENOTFOUND - DNS lookup failed
1. EPERM - Operation not permitted
1. EPIPE - Broken Pipe
1. ETIMEDOUT - Operation timed out

## 1. What defines a System Error?

When a system error occurs, Node.js provides a specialized Error object that
contains specific properties helpful for debugging at the kernel level.

### Key Properties

- **`code`**:
  A short string (e.g., `ENOENT`, `EACCES`).
  This is what you should use in your `if` statements.

- **`errno`**:
  A unique number assigned by the OS for that error.

- **`syscall`**:
  The name of the system call that failed (e.g., `open`, `read`, `connect`).

- **`address` / `port`**:
  Relevant if the error happened during a network operation.

---

## 2. Common System Error Codes

As a backend developer on Arch, you will see these frequently. They usually
point to permission issues or missing files.

| Code               | Meaning                                                         |
| :----------------- | :-------------------------------------------------------------- |
| **`ENOENT`**       | **Error No Entity.** The file or directory does not exist.      |
| **`EACCES`**       | **Error Accessed.** You don't have permissions for this file.   |
| **`EADDRINUSE`**   | **Address already in use.** The port is taken by another app.   |
| **`ECONNREFUSED`** | **Connection Refused.** The target machine refused to connect.  |
| **`ETIMEDOUT`**    | **Operation Timed Out.** The OS gave up waiting for a response. |

---

## 3. Handling System Errors

Since you cannot "prevent" the OS from failing,
you must **catch and handle**
these errors gracefully to prevent your server from crashing.

```javascript
const fs = require("fs").promises;

async function readConfig() {
  try {
    const data = await fs.readFile("/etc/my_config.json");
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      console.error("Config file missing. Using defaults.");
      return {};
    } else if (err.code === "EACCES") {
      console.error("Permission denied! Run with correct user.");
      process.exit(1); // Fail fast
    } else {
      throw err; // Unknown error, pass it up the chain
    }
  }
}

readConfig();
// Config file missing. Using defaults.
```
