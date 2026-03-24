// *** Working with URLs and Query Strings ***

const http = require('http')

const server = http.createServer((req, res) => {
  const { url, method } = req

  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(`Your method : ${method}\nAnd Your url : ${url}`)
})

server.listen(3000)
