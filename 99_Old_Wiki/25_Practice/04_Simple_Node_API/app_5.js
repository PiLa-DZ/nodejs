const http = require('http')
const { URL } = require('url')

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
]

const server = http.createServer((req, res) => {

  const { URL } = require('url')
  const { method, url } = req;
  const parsedUrl = new URL(url, `http://${req.headers.host}`);
  const pathname = parsedUrl.pathname;

  if (req.method === 'GET' && req.url === '/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(todos))
  }
  else if (req.method === 'POST' && req.url === '/todos') {
    let body = ''
    req.on('data', chunk => body += chunk.toString())
    req.on('end', () => {
      body = JSON.parse(body)
      body.id = todos.length > 0 ? todos.length + 1 : 1
      todos.push(body)
      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(body))
    })
  }

  // -------------------------------------------------------------------
  else if (req.method === 'PUT' && req.url.startsWith('/todos/')) {
    const id = parseInt(req.url.split('/')[2]);
    let body = '';
    req.on('data', chunk =>  body += chunk.toString());
    req.on('end', () => {
        const updatedTodo = JSON.parse(body);
        const index = todos.findIndex(t => t.id === id);
        todos[index] = { ...todos[index], ...updatedTodo };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos[index]));
    });
  }
});

server.listen(3000);
