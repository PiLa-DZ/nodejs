// *** Promise Chaining ***
function getUser(userID) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({id: userID, name: 'Batman'}), 1000)
  })
}

function getUserPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(['Post 1 🤑', 'Post 2 💕', 'Post 3 👌']))
  })
}

getUser(123)
  .then(User => {
    console.log(`User:`, User)
    return getUserPosts(User)
  })
  .then(Post => {
    console.log(`Post:`, Post)
  })
  .catch(err => {
    console.error(`Error 😔`)
  })
