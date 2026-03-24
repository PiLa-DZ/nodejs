// *** Avoid mixing async/await with callbacks ***
// *** Convert callback-based functions to Promises using util.promisify or custom wrappers. ***

const util = require('util')
const fs   = require('fs')

// Convert callback-based function to Promise-based
const readFile = util.promisify(fs.readFile)

const printFile = async () => {
  const data1 = await readFile('./dir/f1.txt', 'utf8')
  console.log(data1)
}
printFile()
