const http = require('http')
const fs   = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
	console.log(req.url)
	if (req.url === '/') {
		fs.readFile(path.join(__dirname, '/HomePage/index.html'), (err, data) => {
			if (err) {
				console.error(`Can't Load ./HomePage/index.html Path`, err)
				res.writeHead(500, {'Content-Type': 'text/plain'})
				res.end(`Internal Server Error...`)
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.end(data)
			}
		})
	}
	else if (req.url === '/style.css') {
		fs.readFile(path.join(__dirname, '/HomePage/style.css'), (err, data) => {
			if (err) {
				console.error(`Can't Load ./HomePage/style.css Path`, err)
				res.writeHead(500, {'Content-Type': 'text/plain'})
				res.end(`Internal Server Error...`)
			} else {
				res.writeHead(200, {'Content-Type': 'text/css'})
				res.end(data)
			}
		})
	}
	else if (req.url === '/script.js') {
		fs.readFile(path.join(__dirname, '/HomePage/script.js'), (err, data) => {
			if (err) {
				console.error(`Can't Load ./HomePage/script.js Path`, err)
				res.writeHead(500, {'Content-Type': 'text/plain'})
				res.end(`Internal Server Error...`)
			} else {
				res.writeHead(200, {'Content-Type': 'application/javascript'})
				res.end(data)
			}
		})
	} else {
		res.writeHead(404, {'Content-Type': 'text/plain'})
		res.end(`Page Not Found!...`)
	}
})

server.listen('5000', () => console.log('Server listening on port 5000...😁'))
