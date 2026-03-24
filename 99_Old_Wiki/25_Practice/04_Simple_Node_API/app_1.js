const { Random_Person, Todos} = require('./MyNodeLib.js')

require('http').createServer((req, res) => {
  console.log(req.url)
  if (req.method === 'GET' && req.url === '/todos') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(Todos))
  }

  else if (req.method === 'POST' && req.url === '/todos') {
    let body = '';
    req.on('data', chunk => body += chunk.toString());

    req.on('end', () => {
      const newTodo = JSON.parse(body);
      newTodo.id = Todos.length > 0 ? Todos.length + 1 : 1;
      Todos.push(newTodo);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newTodo));
    });
  }

}).listen(5000)

