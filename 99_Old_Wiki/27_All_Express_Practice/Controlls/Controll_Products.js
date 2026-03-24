const Product = require('../Models/Model_Products.js')
const Products_Data = require('../Data/Products.js')
const mongoose = require('mongoose')

const createAllProducts = async (req, res) => {
	try {
		Products_Data.forEach(async (elm) => {
			const product = await Product.findOne({name: elm.name})
			if (!product) {
				await Product.create(elm)
			}
		})
		console.log('--> Ok <-- Create All Products done...')
		res.json({message: `--> Ok <-- Create All Products done...`})
	}
	catch (err) {
		console.error(err.message)
	}
}

const deleteAllProducts = async (req, res) => {
	try {
		await Product.deleteMany({})
		console.log('--> Ok <-- Delete All Products Done...')
		res.json({message: `--> Ok <-- Delete All Products Done...`})
	}
	catch (err) {
		console.error(err.message)
	}
}

const getAllProducts = async (req, res) => {
	try {
		const product = await Product.find({})
		res.json(product)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

const getOneProduct = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id)
		if (product) {
			res.json(product)
		}
		else {
			res.status(404).json({message: 'Get One Product --> Id not found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

const createOneProduct = async (req, res) => {
	try {
		const product = await Product.create(req.body)
		res.status(201).json(product)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

const updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body)
		if (product) {
			const updatedProduct = await Product.findById(req.params.id)
			res.json(updatedProduct)
		}
		else {
			res.status(404).json({message: 'Update Product --> Id not found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

const deleteOneProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id)
		if (product) {
			res.json({message: "--> Ok <-- Product delete done..."})
		}
		else {
			res.status(404).json({message: 'Delete Product --> Id not found'})
		}
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
}

module.exports = {
	getOneProduct,
	getAllProducts,
	createOneProduct,
	createAllProducts,
	deleteOneProduct,
	deleteAllProducts,
	updateProduct,
}
