const { Todos } = require('./MyNodeLib')
require('http').createServer((req, res) => {
  // GET Method --------------------------------------------------
  if (req.method === 'GET' && req.url === '/todos') {
    res.writeHead(200, {'Content-Type': 'Application/json'})
    res.end(JSON.stringify(Todos))
  }
  // POST Method -------------------------------------------------
  else if (req.method === 'POST' && req.url === '/todos') {
    body = ''
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => {
      body = JSON.parse(body)
      body.id = Todos.length > 0 ? Todos.length + 1 : 1
      Todos.push(body)
      res.writeHead(201, {'Content-Type': 'Application/json'})
      res.end(JSON.stringify(body))
    })
  }
  // PUT Method --------------------------------------------------
  else if (req.method === 'PUT' && req.url.startsWith('/todos/')) {
    const id = parseInt(req.url.split('/')[2])
    body = ''
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => {
      body = JSON.parse(body)
      const index = Todos.findIndex(e => e.id === id)
      Todos[index] = {...Todos[index], ...body}
      res.end(JSON.stringify(Todos[index]))
    })
  }

}).listen(3000)
