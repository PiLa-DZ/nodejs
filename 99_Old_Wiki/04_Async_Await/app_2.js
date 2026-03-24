// *** Reading a File with Async/Await ***
const fs = require('fs').promises

const async_1 = async () => {
  try {
    const data = await fs.readFile('./dir/f1.txt', 'utf8')
    console.log(`--> `, data)
  }
  catch (err) {
    console.log(`This error from `, err)
  }
}

async_1()
