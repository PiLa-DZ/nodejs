const express = require('express')
const routes = express.Router()
const {
	getAllTodos,
	getOneTodo,
	createAllTodos,
	createOneTodo,
	deleteAllTodos,
	deleteOneTodo,
	updateOneTodo
} = require('../Controlls/Controll_Todos.js')

routes.get('/', getAllTodos)
routes.get('/create_all', createAllTodos)
routes.get('/delete_all', deleteAllTodos)
routes.get('/:id', getOneTodo)
routes.post('/', createOneTodo)
routes.delete('/:id', deleteOneTodo)
routes.put('/:id', updateOneTodo)

module.exports = routes
