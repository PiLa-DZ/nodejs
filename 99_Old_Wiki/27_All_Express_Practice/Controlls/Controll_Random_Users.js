const RandomUser = require('../Models/Model_Random_User.js')
const randomUsersData = require('../Data/Random_users.js')
const mongoose = require('mongoose')

const deleteAllRandomUsers = async (req, res) => {
	try {
		await RandomUser.deleteMany({})
		console.log('--> Ok <-- Delete All Random Users Done...')
		res.json({message: `--> Ok <-- Delete All Random Users Done...`})
	}
	catch (err) {
		console.error(err.message)
	}
}

const createAllRandomUsers = async (req, res) => {
	try {
		randomUsersData.forEach(async (elm) => {
			const randomUser = await RandomUser.findOne({name: elm})
			if (!randomUser) {
				await RandomUser.create({name: elm})
			}
		})
		console.log('--> Ok <-- Create All Random Users done...')
		res.json({message: `--> Ok <-- Create All Random Users done...`})
	}
	catch (err) {
		console.error(err.message)
	}
}

const getAllRandomUsers = async (req, res) => {
	try {
		const randomUser = await RandomUser.find({})
		res.json(randomUser)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

const createOneRandomUser = async (req, res) => {
	try {
		const randomUser = await RandomUser.create(req.body)
		res.status(201).json(randomUser)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

const queryRandomUsers = async (req, res) => {
	try {
		const search = new RegExp(`^${req.query.search}`, 'i')
		let randomUsers = await RandomUser.find({ name: {$regex: search}})
		randomUsers = randomUsers.slice(0, req.query.limit)
		if (randomUsers.length > 0) {
			res.json(randomUsers)
		}
		else {
			res.status(404).json({message: 'No random users found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}



module.exports = {
	getAllRandomUsers,
	createOneRandomUser,
	queryRandomUsers,
	deleteAllRandomUsers,
	createAllRandomUsers
}
