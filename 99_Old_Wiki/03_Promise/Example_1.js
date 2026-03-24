// *** Basic Promise Creation ****
const prms = new Promise((resolve, reject) => {
  const err = Math.random() < 0.5 ? true : false
  if (err) reject('We Have a Problem 😔😔😔😔😔😔😔😔')
  else     resolve('We dont have any problem 🥰🥰🥰🥰')
})

prms
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.error(err)
  })
