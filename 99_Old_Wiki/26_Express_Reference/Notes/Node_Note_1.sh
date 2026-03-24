1 Create Server
2 Serve Files
3 Simple API (CRUD)

1 Create Server
	- http module
	- http.createServer()
		- Request and Response
		- Response.end()
		- .listen()
	- localhost and port
	- $ node server.js
2 Serve Files
	- fs module
		- fs.readFile()
			- Error
			- Data
	- path module
		- path.join()
	- Global Variable
		__dirname
	- http module
		- Request.url
		- Response.writeHead()
			- Status code
			- Content-Type
3 Simple API (CRUD)
	- http module
		- req.method
		- req.on()
			- req.on('data')
			- req.on('end')

