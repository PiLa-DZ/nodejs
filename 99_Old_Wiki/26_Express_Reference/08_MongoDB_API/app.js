const Product = require('./models/product.model.js')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => { res.send('Welcome to MongoDB...') })

app.get('/api/products', async (req, res) => {
	try {
		const products = await Product.find({})
		res.json(products)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
})

app.get('/api/product/:id', async (req, res) => {
	try {
		const id = req.params.id
		const product = await Product.findById(id)
		res.json(product)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
})

app.post('/api/product', async (req, res) => {
	try {
		const product = await Product.create(req.body)
		res.status(201).json(product)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
})

app.put('/api/product/:id', async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findByIdAndUpdate(id, req.body)
		if(!product) {
			return res.status(404).json({message: 'ID not found...'})
		}
		const updatedProduct = await Product.findById(id)
		res.status(200).json(updatedProduct)
	}
	catch (err) {
		res.status(500).json({message: err.message})
	}
})

app.delete('/api/product/:id', async (req, res) => {
	try {
		const { id } = req.params
		const product = await Product.findByIdAndDelete(id)
		if (!product) {
			return res.status(404).json({message: 'Product not found'})
		}
		res.status(204).json({message: 'Product deleted successfully'})
	}
	catch (err) {
		res.status(500).json({message: err.message}) 
	}
})

mongoose.connect("mongodb+srv://blackhenterhat_db_user:SDLITP5n70TKpvxU@cluster0.hvrpdpo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
	.then(() => {
		console.log('Connected to database!')
		app.listen(3000, () => console.log(`Server listening on 3000...`))
	})
	.catch(() => {
		console.log('Connection Failed!')
	})
