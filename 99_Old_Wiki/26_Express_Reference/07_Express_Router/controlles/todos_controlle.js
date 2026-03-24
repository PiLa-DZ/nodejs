let Todos = require('../data/Todos.js')

const getAllTodos = (req, res) => {
	res.json(Todos)
}

const getOneTodo = (req, res) => {
	const id = Number(req.params.id)
	const todo = Todos.find(e => e.id === id)
	if (todo) {
		res.json(todo)
	}
	else {
		res.status(404).json({message: 'Id not found'})
	}
}

module.exports = {
	getAllTodos,
	getOneTodo
}
