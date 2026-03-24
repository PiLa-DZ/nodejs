// *** Example: Timeout Pattern with Promise.race() ***
const promise_1 = new Promise((resolve) => setTimeout(() => resolve(`Promise 1`), 3000))
const promise_2 = new Promise((resolve) => setTimeout(() => resolve(`Promise 2`), 2000))
const promise_3 = new Promise((resolve) => setTimeout(() => resolve(`Promise 3`), 1000))

// promise_1.then(result => console.log(result))
// promise_2.then(result => console.log(result))
// promise_3.then(result => console.log(result))

Promise.race([promise_1, promise_2, promise_3])
  .then(result => {
    console.log(`Results🥰: `, result)
  })
  .catch(err => {
    console.error(`Error😤: `, err)
  })

for (i = 0; i < 3; i++) setTimeout((j) => console.log(`Waiting🤪... ${j}`), i * 1000, i)

/* Output:
Waiting🤪... 0
Results🥰:  Promise 3
Waiting🤪... 1
Waiting🤪... 2
*/
