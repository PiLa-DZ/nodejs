const express = require('express')
const app = express()

app.get('/', (req, res) => {
	console.log(req.url)
	console.log(req.method)
	res.send('This is Home page...')
})

app.get('/about', (req, res) => {
	console.log(req.url)
	console.log(req.method)
	res.send('This is About page...')
})

app.all('*', (req, res) => {
	console.log(req.url)
	console.log(req.method)
	res.status(404).send('404 Page not found')
})


app.listen(5000, () => {
	console.log(`Server listening on port 5000...`)
})
