async function loadModule(moduleName) {
  try {
    const myModule = await import(`./${moduleName}.mjs`)
    return myModule
  }
  catch(err) {
    console.log(`Failed to lead ${moduleName} : `, err)
  }
}

const moduleName = 'my_module'

loadModule(moduleName).then(myModule => {
  myModule.default()
  myModule.fun2()
})

;(async () => {
    const myModule = await import('./my_module.mjs')
    myModule.fun1()
})()

