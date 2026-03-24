const mongoose = require('mongoose')
const Todo = require('../Models/Model_Todos.js')
const Todos_Data = require('../Data/Todos.js')

const getAllTodos = async (req, res) => {
	try {
		const todo = await Todo.find({})
		res.json(todo)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const getOneTodo = async (req, res) => {
	try {
		const todo = await Todo.findById(req.params.id)
		if (todo) {
			res.json(todo)
		}
		else {
			res.status(404).json({message: `--> NO <-- Get One Todo --> Id not found...`})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const createAllTodos = async (req, res) => {
	try {
		Todos_Data.forEach(async elm => {
			const todo = await Todo.findOne({task: elm.task})
			if (!todo) {
				await Todo.create(elm)
			}
		})
		res.json({message: `--> OK <-- Create All Todos Done...`})
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const createOneTodo = async (req, res) => {
	try {
		const todo = await Todo.create(req.body)
		res.status(201).json(todo)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const deleteAllTodos = async (req, res) => {
	try {
		await Todo.deleteMany({})
		res.json({message: `--> OK <-- Delete All Todos Done...`})
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const deleteOneTodo = async (req, res) => {
	try {
		const todo = await Todo.findByIdAndDelete(req.params.id)
		if (todo) {
			res.json({message: `--> OK <-- Delete One Todo Done...`})
		}
		else {
			res.status(404).json({message: `--> NO <-- Delete One Todo --> Id not found...`})

		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const updateOneTodo = async (req, res) => {
	try {
		const todo = await Todo.findByIdAndUpdate(req.params.id, req.body)
		if (todo) {
			const updatedTodo = await Todo.findById(req.params.id)
			res.json(updatedTodo)
		}
		else {
			res.status(404).json({message: `--> NO <-- Update One Todo --> Id not found...`})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

module.exports = {
	getAllTodos,
	getOneTodo,
	createAllTodos,
	createOneTodo,
	deleteAllTodos,
	deleteOneTodo,
	updateOneTodo
}
