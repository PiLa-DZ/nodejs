// Using TypeScript with Node.js
  // To use TypeScript in Node.js projects, you need to install TypeScript and a type definition manager:
    sudo npm install -g typescript
    npm install --save-dev @types/node
  // Write your code in .ts files and compile them to JavaScript with:
    tsc yourfile.ts

// Setting Up a TypeScript Project
  // 1. Initialize a new Node.js project
    npm init -y
  // 2. Install TypeScript and type definitions
    npm install --save-dev typescript @types/node
  // 3. Initialize TypeScript configuration
    npx tsc --init


// ---------------------------------------------------
// From Youtube
{
  "scripts": {
    "build": "tsc",
  },
}
npm install -D ts-node
  ts-node index.ts

// ---------------------------------------------------
// Notes -->
// TypeScript Configuration
// tsconfig.json
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
// Key Compiler Options:
    target:  Specify ECMAScript target version
    module:  Specify module code generation
    strict:  Enable all strict type checking options
    outDir:  Redirect output structure to the directory
    rootDir: Specify the root directory of input files



