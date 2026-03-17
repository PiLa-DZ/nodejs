// Import specific named exports
import { fun1, fun2 } from './my_module.mjs'
fun1()
fun2()

// Rename imports to avoid naming conflicts
import { fun3 as f3, fun4 as f4 } from './my_module.mjs'
f3()
f4()

// Import all named exports as an object
import * as f from './my_module.mjs'
f.fun1()
f.fun2()
f.fun3()
f.fun4()
