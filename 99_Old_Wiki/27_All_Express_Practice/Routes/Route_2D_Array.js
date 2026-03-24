const {
	getAllElm,
	getOneElm,
	getOneCol,
	getOneRow
} = require('../Controlls/Controll_2D_Arry.js')
const express = require('express')
const routes = express.Router()

routes.route('/').get(getAllElm)
routes.route('/x/:x/y/:y').get(getOneElm)
routes.route('/x/:x').get(getOneCol)
routes.route('/y/:y').get(getOneRow)

module.exports = routes
