const mongoose = require('mongoose')
const User = require('../Models/Model_Users.js')
const Users_Data = require('../Data/Users.js')

const getAllUsers = async (req, res) => {
	try {
		const user = await User.find({})
		res.json(user)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const getOneUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		if (user) {
			res.json(user)
		}
		else {
			res.status(404).json({message: 'Get One User --> Id not found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const createAllUsers = async (req, res) => {
	try {
		Users_Data.forEach(async elm => {
			const user = await User.findOne({name: elm.name})
			if (!user) {
				await User.create(elm)
			}
		})
		res.json({message: `--> OK <-- Create All Users Done...`})
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const createOneUser = async (req, res) => {
	try {
		const user = await User.create(req.body)
		res.status(201).json(user)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const deleteAllUsers = async (req, res) => {
	try {
		await User.deleteMany({})
		res.json({message: `--> OK <-- Delete All Users Done...`})
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const deleteOneUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id)
		if (user) {
			res.json({message: `--> OK <-- Delete One User Done...`})
		}
		else {
			res.status(404).json({message: 'Delete One User --> Id not found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}
const updateOneUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body)
		if (user) {
			const updatedUser = await User.findById(req.params.id)
			res.json(updatedUser)
		}
		else {
			res.status(404).json({message: 'Update One User --> Id not found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

module.exports = {
	getAllUsers,
	getOneUser,
	createAllUsers,
	createOneUser,
	deleteAllUsers,
	deleteOneUser,
	updateOneUser
}
