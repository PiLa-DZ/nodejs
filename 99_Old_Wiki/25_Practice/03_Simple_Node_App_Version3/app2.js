const http = require('http')
const fs   = require('fs')
const path = require('path')

const serveFile = (res, filePath, contentType) => {
  fs.readFile(path.join(__dirname, filePath), (err, data) => {
    if (err) {
      console.error(`Can't Load ${filePath} Path`, err)
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.end(`Internal Server Error...`)
    } else {
      res.writeHead(200, {'Content-Type': contentType})
      res.end(data)
    }
  })
}

const server = http.createServer((req, res) => {
	console.log(req.url)
	if      (req.url === '/'         ) serveFile(res, './HomePage/index.html', 'text/html')
	else if (req.url === '/style.css') serveFile(res, './HomePage/style.css', 'text/css')
	else if (req.url === '/script.js') serveFile(res, './HomePage/script.js', 'application/javascript')
	else {
		res.writeHead(404, {'Content-Type': 'text/plain'})
		res.end(`Page Not Found!...`)
  }
})

server.listen('5000', () => console.log('Server listening on port 5000...😁'))
