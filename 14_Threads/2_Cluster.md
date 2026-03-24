# Cluster: Scaling to Every Core

While Child Processes and Worker Threads handle specific heavy tasks,

the Cluster module is about scaling your entire application.

In 2026, even on a modest Arch Linux machine,
you likely have 4, 8, or even 16 CPU cores.
By default, Node.js only uses one.

The Cluster module allows you to "fork" your main server process
into multiple worker processes that all share the same server port.

---

## 1. How Clustering Works

Clustering creates a Primary (Master) process
that doesn't handle requests itself.
Instead, it acts as a load balancer,
distributing incoming traffic to Worker processes using a Round-Robin algorithm.

- Primary Process:
  Manages the workers.
  If one dies, the Primary can restart it.

- Worker Processes:
  Independent instances of your app.
  Each has its own memory and V8 engine.

- Shared Port:
  Every worker tries to listen on the same port (e.g., 3000).
  Node.js internally handles this so they don't conflict.

---

## 2. Basic Implementation

In 2026,
the cluster module uses isPrimary (replacing the older isMaster).

```js
import cluster from "node:cluster";
import http from "node:http";
import { availableParallelism } from "node:os";

if (cluster.isPrimary) {
  const numCPUs = availableParallelism();
  console.log(`Primary ${process.pid} is starting ${numCPUs} workers...`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  // Workers share the same TCP connection (Port 8000)
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker ${process.pid}\n`);
    })
    .listen(8000);
}
```

---

## 3. Cluster vs. PM2

You might remember PM2 from the "Keep App Running" section.
PM2 actually uses this Cluster module under the hood

| Feature       | Native Cluster Module                              | PM2 Cluster Mode                        |
| ------------- | -------------------------------------------------- | --------------------------------------- |
| Code Changes  | Required. You must write the if (isPrimary) logic. | None. Just run pm2 start app.js -i max. |
| Zero-Downtime | Manual (Reload workers one by one).                | Automatic via pm2 reload.               |
| Monitoring    | None (You must build it).                          | Built-in (Dashboard & Logs).            |
| Best For      | Learning/Custom specialized scaling.               | Production deployments.                 |

---

## 4. Comparison Table: The Three Threading Pillars

| Feature       | Child Process                | Worker Threads              | Cluster                  |
| ------------- | ---------------------------- | --------------------------- | ------------------------ |
| Memory        | Isolated (Expensive)         | Shared (Lighter)            | Isolated (Expensive)     |
| Goal          | Run OS commands/Other files. | CPU-heavy JS logic (Math).  | Scaling Web Servers.     |
| Communication | IPC Messages.                | Messages / Shared Memory.   | IPC Messages.            |
| Best For      | "Image Resizing, ffmpeg."    | "Encryption, Data Parsing." | Handling 10x more users. |

---

## Summary

| Concept        | Definition                                                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| cluster.fork() | The command used by the Primary to create a new Worker.                                                                                 |
| Round-Robin    | The default strategy where the Primary gives the next request to the next available worker.                                             |
| isPrimary      | "A boolean to check if the current process is the ""Manager."""                                                                         |
| Shared State   | "The biggest ""Gotcha""—Workers don't share variables. You must use Redis or a Database if you want them to ""know"" about each other." |
