let arr = require('../Data/2D_Array.js')

// Get all elements
const getAllElm = (req, res) => {
	res.json(arr)
}
// Get One Element
const getOneElm = (req, res) => {
	const x = Number(req.params.x)
	const y = Number(req.params.y)
	res.json(arr[y][x])
}
// Get One Column
const getOneCol = (req, res) => {
	const x = Number(req.params.x)
	console.log(req.params)
	const col = arr.map(e => e[x])
	res.json(col)
}
// Get One Row
const getOneRow = (req, res) => {
	const y = Number(req.params.y)
	res.json(arr[y])
}

module.exports = {
	getAllElm,
	getOneElm,
	getOneCol,
	getOneRow
}
