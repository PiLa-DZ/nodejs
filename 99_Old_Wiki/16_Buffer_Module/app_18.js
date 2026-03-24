// *** Advanced Buffer Operations ***
// *** Buffer Performance Considerations ***
// ***  // Memory Usage: Buffers consume memory outside the JavaScript heap, which can be both an advantage (less garbage collection pressure) and a disadvantage (must be carefully managed) ***
// ***  // Allocation: Buffer.allocUnsafe() is faster than Buffer.alloc() but comes with security considerations ***
// ***  // String Conversion: Converting large buffers to strings or vice versa can be expensive ***
// ***  // Pooling: For applications that frequently create small buffers, consider implementing a buffer pool to reduce allocation overhead ***

// Simple buffer pool implementation
class BufferPool {
  constructor(bufferSize = 1024, poolSize = 10) {
    this.bufferSize = bufferSize;
    this.pool = Array(poolSize).fill().map(() => Buffer.alloc(bufferSize));

    this.used = Array(poolSize).fill(false);
  }

  // Get a buffer from the pool
  get() {
    const index = this.used.indexOf(false);
    if (index === -1) {
       // Pool is full, create a new buffer
       console.log('Pool full, allocating new buffer');
       return Buffer.alloc(this.bufferSize);
    }
    this.used[index] = true;
    return this.pool[index];
  }

  // Return a buffer to the pool
  release(buffer) {
    const index = this.pool.indexOf(buffer);
    if (index !== -1) {
       // Zero the buffer for security
       buffer.fill(0);
       this.used[index] = false;
    }
  }
}

// Usage example
const pool = new BufferPool(10, 3); // 3 buffers of 10 bytes each

const buf1 = pool.get();
const buf2 = pool.get();
const buf3 = pool.get();
const buf4 = pool.get(); // This will allocate a new buffer

buf1.write('Hello');
console.log(buf1.toString()); // Hello

// Return buf1 to the pool
pool.release(buf1);

// Get another buffer (should reuse buf1)
const buf5 = pool.get();
console.log(buf5.toString()); // Should be empty (zeros)
