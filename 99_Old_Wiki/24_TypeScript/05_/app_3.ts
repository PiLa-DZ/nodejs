// *** Advanced TypeScript Patterns for Node.js ***
// *** These patterns help build more maintainable and type-safe Node.js applications: ***
// *** 3. Type-Safe Event Emitters ***

import { EventEmitter } from 'events';

type EventMap = {
  login: (userId: string) => void;
  logout: (userId: string, reason: string) => void;
  error: (error: Error) => void;
};

class TypedEventEmitter<T extends Record<string, (...args: any[]) => void>> {
  private emitter = new EventEmitter();

  on<K extends keyof T>(event: K, listener: T[K]): void {
    this.emitter.on(event as string, listener as any);
  }

  emit<K extends keyof T>(
    event: K,
    ...args: Parameters<T[K]>
  ): boolean {
    return this.emitter.emit(event as string, ...args);
  }
}

// Usage
const userEvents = new TypedEventEmitter<EventMap>();
userEvents.on('login', (userId) => {
  console.log(`User ${userId} logged in`);
});

// TypeScript will show an error for incorrect argument types
// userEvents.emit('login', 123);
// Error: Argument of type 'number' is not assignable to 'string'
