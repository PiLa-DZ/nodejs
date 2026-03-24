const express = require('express')
const app = express()

let arr = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
]

app.get('/:x/:y', (req, res) => {
	const x = Number(req.params.x)
	const y = Number(req.params.y)
	res.json({result: arr[x][y], params: req.params})
})

app.get('/x/:x', (req, res) => {
	const x = Number(req.params.x)
	res.json({result: arr[x], params: req.params})
})

app.get('/y/:y', (req, res) => {
	const y = Number(req.params.y)
	let newArr = []
	arr.forEach(e => newArr.push(e[y]))
	res.json({rusult: newArr, params: req.params})
})

app.get('/x/:x/y/:y', (req, res) => {
	const x = Number(req.params.x)
	const y = Number(req.params.y)
	res.json({result: arr[x][y], params: req.params})
})


app.listen(3000)
