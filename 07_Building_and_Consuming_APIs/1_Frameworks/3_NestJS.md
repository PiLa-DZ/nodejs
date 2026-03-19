# NestJS: The Progressive Node.js Framework

**_NestJS_** is a full-featured, opinionated framework.
Built with **_TypeScript_** by default,
it uses a modular architecture inspired by **_Angular_**.
It is designed for building efficient,
reliable, and scalable server-side applications
in large professional environments.

## 1. The Three Pillars of NestJS

A NestJS application is organized into three main types of classes:

### A. Controllers

Controllers are responsible for handling incoming requests
and returning responses to the client.
They use decorators to define routes.

```js
@Controller('arch')
export class ArchController {
  @Get('info')
  findAll(): string {
    return 'Returning system info...';
  }
}
```

### B. Providers (Services)

Many basic Nest classes can be treated as providers
(services, repositories, factories).
The main idea is that they can be injected as a dependency.

```js
@Injectable()
export class ArchService {
  getKernelVersion(): string {
    return '6.1.x-arch1-1';
  }
}
```

### C. Modules

A module is a class annotated with a @Module() decorator.
It provides metadata
that Nest makes use of to organize the application structure.

---

## 2. Dependency Injection (DI)

NestJS is built around a powerful design pattern
called Dependency Injection.

Instead of manually creating instances
of your services (using new Service()),
Nest handles the lifecycle of your objects for you.

```js
@Controller('system')
export class SystemController {
  // Nest injects the ArchService automatically here
  constructor(private readonly archService: ArchService) {}

  @Get()
  getVersion() {
    return this.archService.getKernelVersion();
  }
}
```

---

## 3. The Nest CLI

Nest provides a powerful Command Line Interface
that scaffolds code for you,
similar to how pacman manages your system packages.

| Command                    | Action                              |
| -------------------------- | ----------------------------------- |
| nest new project-name      | Scaffolds a whole new project.      |
| nest generate module users | Creates a new feature module.       |
| nest generate service auth | Creates a service with a test file. |
| nest start --watch         | Starts the app in development mode. |

---

## 4. Comparison Table for your Wiki

| Feature        | Express                | NestJS                          |
| -------------- | ---------------------- | ------------------------------- |
| Language       | JavaScript/TypeScript. | TypeScript (Required).          |
| Architecture   | Unopinionated (Loose). | Highly Structured (Modular).    |
| Learning Curve | Low.                   | High (Requires OOP/Decorators). |
| Best For...    | Small apps/scripts.    | "Large, Scalable Enterprises."  |
| Arch Analogy   | A custom DIY script.   | A structured systemd service.   |

## Summary

| Concept    | Description                                   |
| ---------- | --------------------------------------------- |
| Decorators | Prefix functions like @Get() or @Post().      |
| DTOs       | Data Transfer Objects (defines input shapes). |
| Pipes      | Used for data transformation and validation.  |
| Guards     | Used for authentication and authorization.    |
