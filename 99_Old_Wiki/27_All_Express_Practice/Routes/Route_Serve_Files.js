const {
	serveHomePage,
	serveAboutPage,
	serveHelpPage
} = require('../Controlls/Controll_Server_Files.js')
const express = require('express')
const routes = express.Router()

routes.route('/').get(serveHomePage)
routes.route('/about').get(serveAboutPage)
routes.route('/help').get(serveHelpPage)

module.exports = routes
