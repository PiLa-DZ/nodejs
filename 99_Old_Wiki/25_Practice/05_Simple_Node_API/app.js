
let { Todos } = require('./MyNodeLib')
require('http').createServer((req, res) => {
	// GET Method ---------------------------------------------------
	if (req.method === 'GET' && req.url === '/todos') {
		res.writeHead(200, {'Content-Type': 'Applicatin/json'})
		res.end(JSON.stringify(Todos))
	}
	// POST Method --------------------------------------------------
	else if (req.method === 'POST' && req.url === '/todos'){
		let body = ''
		req.on('data', chunk => body += chunk.toString())
		req.on('end', () => {
			body = JSON.parse(body)
			body.id = Todos.length > 0 ? Math.max(...Todos.map(e => e.id)) + 1 : 1
			Todos.push(body)
			console.log(Todos)
			res.writeHead(201, {'Content-Type': 'Application/json'})
			res.end(JSON.stringify(body))
		})
	}
	// PUT Method ---------------------------------------------------
	else if (req.method === 'PUT' && req.url.startsWith('/todos/')) {
		const id = parseInt(req.url.split('/')[2])
		let body = ''
		req.on('data', chunk => body += chunk.toString())
		req.on('end', () => {
			body = JSON.parse(body)
			const index = Todos.findIndex(e => e.id === id)
			Todos[index] = { ...Todos[index], ...body }
			console.log(Todos)
			res.writeHead(200, {'Content-Type': 'Application/json' })
			res.end(JSON.stringify(Todos[index]))
		})
	}
	// DELETE Method ------------------------------------------------
	else if (req.method === 'DELETE' && req.url.startsWith('/todos/')) {
		const id = parseInt(req.url.split('/')[2])
		Todos = Todos.filter(e => e.id !== id)
		res.writeHead(204, {'Content-Type': 'Applicatn/json'})
		res.end(JSON.stringify(Todos))
		console.log(Todos)
	}
}).listen(3000)
