// *** Async/Await vs Promises vs Callbacks ***
// *** With Async/Await ***
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

const getAllData = async () => {
  try {
    const UserData = await getUser(1)
    console.log(`User Data: `, UserData)
    const UserPosts = await getPost(UserData)
    console.log(`User Posts: `, UserPosts)
  }
  catch (err) {
    console.error(`Error 😤`, err)
  }
}
getAllData()
