// *** Reading a File with Promises ***
const fs = require('fs').promises
const time = 5

const promise_1 = Promise.resolve('Promise 1')

const promise_2 = new Promise((resolve) => {
  setTimeout(() => resolve('Promise 2'), time * 1000)
})

const promise_3 = fs.readFile('./Dir/f1.txt', 'utf8')

Promise.all([promise_1, promise_2, promise_3])
  .then(result => {
    console.log(`Results: `, result)
  })
  .catch(err => {
    console.error(err)
  })

for (i = 0; i < time; i++) {
  setTimeout((j) => console.log(`Waiting...${j}`), i * 1000 , i)
}
