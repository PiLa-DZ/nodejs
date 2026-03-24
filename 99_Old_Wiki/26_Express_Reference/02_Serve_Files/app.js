const path = require('path')
const express = require('express')
const app = express()
const port = 5000

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/help', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'help.html'))
})

app.all('*', (req, res) => {
	res.status(404).send('404 Page not found')
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}...`)
})
