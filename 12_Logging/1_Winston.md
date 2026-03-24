# Winston: The "Swiss Army Knife" of Logging

In a production environment on Arch Linux,
using console.log() is a major "no-go."

Logs need to be persistent, searchable, and categorized.

**_Winston_** is the most popular logging library for Node.js
because it is decoupled
it separates the logic of logging from the destination of the logs.

---

## 1. Why Winston instead of console.log?

- Levels:
  You can categorize logs (e.g., info, warn, error).
  In production, you might only want to see "errors,"
  while in development, you want "debug" info.

- Transports:
  A "Transport" is where the log goes.
  With Winston, a single log command can simultaneously go to your terminal,
  a local .log file, and an external cloud service (like Datadog or Loggly).

- Formatting:
  You can turn messy strings into structured JSON.
  This is vital for backend developers
  because JSON logs are easy for tools like Elasticsearch to parse.

---

## 2. Creating a Logger

Typically,
you create a dedicated logger.js file
and import it wherever you need it.

```js
const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // Default level
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(), // Structured data for the win!
  ),
  transports: [
    // 1. Write all logs with level 'error' to error.log
    new winston.transports.File({ filename: "error.log", level: "error" }),
    // 2. Write all logs to combined.log
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

// If we're not in production, also log to the console with colors
if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

module.exports = logger;
```

---

## 3. Log Levels (RFC5424)

Winston follows the standard sys-log levels.
Learning these is essential for any backend dev:

| Level | Priority | Use Case                                                                  |
| ----- | -------- | ------------------------------------------------------------------------- |
| error | 0        | "The system is broken (Database down, 500 errors)."                       |
| warn  | 1        | "Something is odd but not fatal (e.g., ""User tried invalid password"")." |
| info  | 2        | "General app flow (e.g., ""Server started on port 3000"")."               |
| http  | 3        | Logging incoming API requests.                                            |
| debug | 5        | "Detailed info for the dev (e.g., ""Query returned 5 rows"")."            |

---

## 4. Comparison Table: Console vs. Winston

| Feature      | console.log                     | Winston                               |
| ------------ | ------------------------------- | ------------------------------------- |
| Persistence  | Disappears when terminal closes | Saved to Files/Databases              |
| Structure    | Plain text only                 | Structured JSON                       |
| Performance  | Can block the event loop (Sync) | Asynchronous (Non-blocking)           |
| Filtering    | None (All or nothing)           | "Filter by Level (Info, Error, etc.)" |
| Arch Analogy | "echo ""msg"""                  | systemd-journald                      |

---

## Summary

| Term         | Definition                                                       |
| ------------ | ---------------------------------------------------------------- |
| Transport    | "The storage device for your logs (File, Console, MongoDB)."     |
| Format       | "How the log looks (Timestamped, Colorized, JSON)."              |
| Log Rotation | A plugin that deletes old logs so your Arch SSD doesn't fill up. |
| Metadata     | "Extra info attached to a log (e.g., userId, requestId)."        |
