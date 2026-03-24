let Users = require('./data/Random_users.js')
const express = require('express')
const app = express()

app.get('/', (req, res) => {
	console.log(req.query)
	let result = []
	if ('search' in req.query) {
		result = Users.filter(e => e.startsWith(req.query.search))
	}
	if ('limit' in req.query) {
		result = result.slice(0, Number(req.query.limit))
	}
	res.json(result)
})

app.listen(3000)
