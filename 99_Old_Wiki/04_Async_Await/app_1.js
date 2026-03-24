// *** Basic Async/Await ***
function promise_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise 1 Done😍...`, 1000)
    }, 1000)
  })
}

const async_1 = async () => {
  console.log('Waiting😪...')
  const result = await promise_1()
  return result
}

async_1().then(data => console.log(`Data: `, data))

