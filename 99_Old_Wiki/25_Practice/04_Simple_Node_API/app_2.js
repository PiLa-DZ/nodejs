const { Todos } = require('./MyNodeLib.js')
require('http').createServer((req, res) => {

  if (req.method === 'GET' && req.url === '/todos') {
    res.writeHead(200, {'Content-Type': 'Application/json'})
    res.end(JSON.stringify(Todos))
  }

  else if (req.method === 'POST' && req.url === '/todos') {
    let body = ''
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => {
      body = JSON.parse(body)
      body.id = Todos.length > 0 ? Todos.length + 1 : 1
      Todos.push(body)
      res.writeHead(201, {'Content-Type': 'Application/json'})
      res.end(JSON.stringify(body))
    })
  }

}).listen(3000)
