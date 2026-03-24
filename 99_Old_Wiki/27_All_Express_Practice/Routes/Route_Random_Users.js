const express = require('express')
const routes = express.Router()
const {
	getAllRandomUsers,
	createOneRandomUser,
	queryRandomUsers,
	deleteAllRandomUsers,
	createAllRandomUsers
} = require('../Controlls/Controll_Random_Users.js')

routes.get('/delete_all', deleteAllRandomUsers)
routes.get('/create_all', createAllRandomUsers)
routes.get('/', getAllRandomUsers)
routes.post('/', createOneRandomUser)
routes.get('/query', queryRandomUsers)

module.exports = routes
