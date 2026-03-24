let Todos = require('./data/Todos.js')
const express = require('express')
const app = express()

app.use(express.json())

app.get('/todos', (req, res) => {
	res.json(Todos)
})

app.get('/todos/:id', (req, res) => {
	const id = Number(req.params.id)
	const todo = Todos.find(e => e.id === id)
	if (todo) {
		res.json(todo)
	}
	else {
		res.status(404).json({message: 'Id not fond'})
	}
})

app.post('/todos', (req, res) => {
	if ('task' in req.body && 'completed' in req.body) {
		const newId = Todos.length > 0 ? Math.max(...Todos.map(e => e.id)) + 1 : 1
		const newTodo = {
			id: newId,
			task: req.body.task,
			completed: req.body.completed
		}
		Todos.push(newTodo)
		res.status(201).json(newTodo)
	}
	else {
		res.status(404).json({message: 'task and completed are required'})
	}
})

app.put('/todos/:id', (req, res) => {
	const id = Number(req.params.id)
	const index = Todos.findIndex(e => e.id === id)
	if (index !== -1) {
		if ('task' in req.body) {
			Todos[index].task      = req.body.task
		}
		if ('completed' in req.body) {
			Todos[index].completed = req.body.completed
		}
		res.json(Todos[index])
	}
	else {
		res.status(404).json({message: 'Id not found'})
	}
})

app.delete('/todos/:id', (req, res) => {
	const id = Number(req.params.id)
	const oldLength = Todos.length
	Todos = Todos.filter(e => e.id !== id)
	if (Todos.length < oldLength) {
		res.status(204).send()
	}
	else {
		res.status(404).json({message: 'Id not found'})
	}
})

app.listen(3000)
