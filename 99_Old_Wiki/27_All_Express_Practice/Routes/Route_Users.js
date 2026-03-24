const express = require('express')
const routes = express.Router()
const {
	getAllUsers,
	getOneUser,
	createAllUsers,
	createOneUser,
	deleteAllUsers,
	deleteOneUser,
	updateOneUser
} = require('../Controlls/Controll_Users.js')

routes.get('/', getAllUsers)
routes.get('/create_all', createAllUsers)
routes.get('/delete_all', deleteAllUsers)
routes.get('/:id', getOneUser)
routes.post('/', createOneUser)
routes.delete('/:id', deleteOneUser)
routes.put('/:id', updateOneUser)

module.exports = routes
