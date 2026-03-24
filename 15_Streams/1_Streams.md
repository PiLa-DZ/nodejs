# Streams: The Secret to Node.js Efficiency

In Node.js, Streams are the most powerful and often most misunderstood feature.

Imagine you are trying to move a massive 10GB video file on your Arch Linux system.

If you use fs.readFile(),
Node.js tries to shove the entire 10GB into your RAM at once.
If your RAM is only 8GB,
your app crashes.

Streams solve this by breaking the data into tiny "chunks"
and processing them one by one.

---

## 1. The 4 Types of Streams

Every backend developer needs to know these four "pipes":

| Type      | Direction               | Analogy        | Example                            |
| --------- | ----------------------- | -------------- | ---------------------------------- |
| Readable  | Source → Code           | A water faucet | "Reading a file, an HTTP request"  |
| Writable  | Code → Dest             | A drain        | "Writing a file, an HTTP response" |
| Duplex    | Both ways               | A telephone    | A Network Socket (TCP)             |
| Transform | Input → Modify → Output | A water filter | "Compression (Gzip), Encryption"   |

---

## 2. Why Streams Matter (Memory Management)

When you use Streams,
you are using Constant Memory.
Whether the file is 1MB or 100GB,
Node.js only ever holds a tiny piece
(usually 64KB) in memory at any given time.

```js
const fs = require("fs");
const http = require("http");

http
  .createServer((req, res) => {
    // BAD: Reading entire file into memory
    // fs.readFile('big-video.mp4', (err, data) => res.end(data));

    // GOOD: Streaming the file chunk by chunk
    const stream = fs.createReadStream("big-video.mp4");
    stream.pipe(res);
  })
  .listen(3000);
```

---

## 3. The Power of .pipe()

The .pipe() method is the "glue" of Node.js.
It connects a Readable stream to a Writable stream.
In 2026,
we often use the modern pipeline utility
because it handles errors automatically.

```js
const { pipeline } = require("node:stream/promises");
const fs = require("node:fs");
const zlib = require("node:zlib"); // For compression

async function run() {
  await pipeline(
    fs.createReadStream("input.txt"), // 1. Read
    zlib.createGzip(), // 2. Compress (Transform)
    fs.createWriteStream("input.txt.gz"), // 3. Save (Write)
  );
  console.log("Pipeline succeeded.");
}

run().catch(console.error);
```

---

## 4. Buffers vs. Streams

You will often hear these two terms together.
Here is the difference:

- Buffer:
  A small "waiting room" in RAM where data sits before it is processed.

- Stream:  
  The actual "conveyor belt" moving the data.

Arch Analogy:
Using a Buffer is like downloading an entire .iso file before installing it.
Using a Stream is like "Streaming" a video on YouTube
where you watch the beginning while the rest is still downloading.

---

## 5. Summary for your Wiki

| Term          | Definition                                                                                       |
| ------------- | ------------------------------------------------------------------------------------------------ |
| Chunk         | A small piece of the data being moved (usually a Buffer).                                        |
| Backpressure  | When the "Writer" is slower than the "Reader" (Node.js handles this automatically with .pipe()). |
| highWaterMark | The maximum size of the "waiting room" (buffer) before the stream pauses.                        |
| on('data')    | The event that fires every time a new chunk arrives.                                             |
