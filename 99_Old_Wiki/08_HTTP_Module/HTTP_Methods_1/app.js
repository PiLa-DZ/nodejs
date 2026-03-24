const http = require('http');
const { URL } = require('url');

let todos = [
  { id: 1, task: 'Learn Node.js', completed: false },
  { id: 2, task: 'Build an API', completed: false }
];

const server = http.createServer((req, res) => {
  // Route: GET /todos
  if (req.method === 'GET' && req.url === '/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
  }
});

server.listen(3000, () => { console.log(`Start...`)});
