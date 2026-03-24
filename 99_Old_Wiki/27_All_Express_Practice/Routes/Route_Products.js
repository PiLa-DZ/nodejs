const express = require('express')
const routes = express.Router()
const {
	getAllProducts,
	deleteAllProducts,
	createAllProducts,
	createOneProduct,
	updateProduct,
	deleteOneProduct,
	getOneProduct
} = require('../Controlls/Controll_Products.js')

routes.get('/', getAllProducts)
routes.get('/delete_all', deleteAllProducts)
routes.get('/create_all', createAllProducts)
routes.post('/', createOneProduct)
routes.put('/:id', updateProduct)
routes.delete('/:id', deleteOneProduct)
routes.get('/:id', getOneProduct)

module.exports = routes
