// *** Error Handling in Promises ***
const promise_1 = new Promise((resolve, reject) => {
  reject(new Error('Error from promise 1 😔'))
})

promise_1
  .then(
    (result) => {
      console.log(`Result🥰: `, result)
    },
    (err) => {
      console.log(`Error😤: `, err.message)
    }
  )

 // Alternative method using catch
promise_1
  .then(result => console.log(`Result🥰: `, result))
  .catch(err   => console.log(`Error😤: ` , err.message))
