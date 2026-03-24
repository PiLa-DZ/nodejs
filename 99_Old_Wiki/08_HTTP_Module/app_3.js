// *** Working with HTTP Headers ***
// *** You can access request headers using the req.headers object: ***

const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.headers)

  const user_agent = req.headers['user-agent']
  const accept_language = req.headers['accept-language']

  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(`User Agent 😍 : --> ${user_agent}\nAccept Language 😘 : --> ${accept_language}`)
})

server.listen(3000)
