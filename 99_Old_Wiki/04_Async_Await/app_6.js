// *** Async/Await vs Promises vs Callbacks ***
// *** With Promises ****
const getUser = (ID) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({user: ID, name:`Batman😄`})
  }, 1000)
  // reject(`I don't know what happend😩`)
})

const getPost = (user) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Post 1', 'Post 2', '🥰'])
  }, 1000)
  // reject(`I don't know what happend😩`)
})

getUser(1)
  .then(UserData => {
    console.log(`User Data :`, UserData)
    return getPost(UserData)
  })
  .then(UserPosts => {
    console.log(`User Posts: `, UserPosts)
  })
  .catch(err => {
    console.error(`Error 😤`, err)
  })
