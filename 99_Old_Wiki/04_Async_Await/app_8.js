// Remember that async functions always return Promises

async function fun() {
  return `💕💕💕 I love Async Function 💕💕💕`
}

console.log(fun())

fun().then(msg => console.log(msg))

/* Output:
Promise { '💕💕💕 I love Async Function 💕💕💕' }
💕💕💕 I love Async Function 💕💕💕
*/
