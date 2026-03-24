# What you should learn first?

---

## 1. The Beginner's Roadmap

| Order | Topic          | "The Simple ""Human"" Analogy"                                    | Difficulty   |
| ----- | -------------- | ----------------------------------------------------------------- | ------------ |
| 1st   | Child Process  | Hiring a different person to do a job in a different room.        | ⭐ (Easiest) |
| 2nd   | Worker Threads | Using your extra hands to do math while your mouth keeps talking. | ⭐⭐         |
| 3rd   | Cluster        | Cloning yourself so you can talk to 4 people at once.             | ⭐⭐⭐       |

---

## 2. Why this order?

### Step 1: Child Process (The "External" Helper)

Learn this first
because it is the most common way to talk to your Arch Linux system.

- What it does:  
  It lets your Node.js script run a command in the terminal  
  (like ls or neofetch) and give you the result.

- Why start here:  
  It teaches you that Node.js can control other programs.  
  It’s very satisfying to see your JS code run a Linux command.

### Step 2: Worker Threads (The "Internal" Helper)

Once you understand that you can "spawn" other tasks,
learn Worker Threads.

- What it does:
  It allows you to do heavy math
  (like calculating a huge Fibonacci sequence)
  without "freezing" your main server.

- Why it’s next:
  It introduces the concept of Threads.
  In Node.js, your code usually only uses one "brain" (thread).
  This lets you use your other CPU cores for JavaScript work.

### Step 3: Cluster (The "Professional" Scaler)

Learn this last
because it’s a bit more "magical"
and is usually handled for you by tools like PM2.

- What it does:
  It launches 4 or 8 copies of your entire website at once
  to handle thousands of users.

- Why it’s last:
  It requires you to understand how servers and ports work.
  It’s about Traffic Scaling,
  not just "doing a task."

---

## 3. Summary for your Wiki

- Child Process:
  Use this to run Shell Commands or Python scripts.

- Worker Threads:
  Use this for Heavy Calculations (Math, Image processing) inside JavaScript.

- Cluster:
  Use this to Make your Website Faster by using all your CPU cores.
