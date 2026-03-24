// *** Advanced TypeScript Patterns for Node.js ***
// *** These patterns help build more maintainable and type-safe Node.js applications: ***
// *** 1. Advanced Decorators ***

// Parameter decorator with metadata
function validateParam(target: any, key: string, index: number) {
  const params = Reflect.getMetadata('design:paramtypes', target, key) || [];
  console.log(`Validating parameter ${index} of ${key} with type ${params[index]?.name}`);
}

// Method decorator with factory
function logExecutionTime(msThreshold = 0) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (...args: any[]) {
      const start = Date.now();
      const result = await originalMethod.apply(this, args);
      const duration = Date.now() - start;
      if (duration > msThreshold) {
        console.warn(`[Performance] ${key} took ${duration}ms`);
      }
      return result;
    };
  };
}
class ExampleService {
  @logExecutionTime(100)
  async fetchData(@validateParam url: string) {
    // Implementation
  }
}

