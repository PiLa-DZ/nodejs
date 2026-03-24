const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()
const Users = []
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const PORT = process.env.PORT || 5000

app.use(express.json())

// NOTE: Register ------------------------------------------------------
app.post('/register', async (req, res) => {
	const {name, password} = req.body

	if (!name || !password) {
		return res.status(400).json({message: 'Name and Password are required'})
	}

	if (Users.find(e => e.name === name)) {
		return res.status(409).json({message: 'User already exists'})
	}

	if (password.length < 6) {
		return res.status(400).json({message: 'Password Too Short'})
	}

	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const NewUser = {
			name: name,
			passwordHash: hashedPassword
		}

		Users.push(NewUser)

		res.status(201).json({ message: 'User Register Done', User: NewUser.name})
	}
	catch (error) {
		console.log(`500 Internal Server Error From /Register --> ${error.message}`)
		res.status(500).json({message: `500 Internal Server Error`})
	}
})

// NOTE: Login ---------------------------------------------------------
app.post('/login', async (req, res) => {
	const {name, password} = req.body
	const user = Users.find(e => e.name === name)

	if (!name || !password) {
		return res.status(400).json({message: 'Name and Password are required'})
	}

	if (!user) {
		return res.status(401).json({message: 'Wrong Name or Password'})
	}

	try {
		const isMatch = await bcrypt.compare(password, user.passwordHash)
		if (!isMatch) {
			return res.status(401).json({message: 'Wrong Name or Password'})
		}

		const payload = {
			name: user.name,
			any: 'Anything'
		}

		const token = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: '10m'})

		res.json({message: 'User Login Done', token: token})
	}
	catch (error) {
		console.log(`500 Internal Server Error From /Login --> ${error.message}`)
		res.status(500).json({message: `500 Internal Server Error`})
	}
})

// NOTE: Profile -------------------------------------------------------
const verifyToken = (req, res, next) => {
	const header = req.headers['authorization']
	if (!header || !header.startsWith('Bearer ')) {
		return res.status(400).json({message: 'Invalid authrization'})
	}
	const token = header.split(' ')[1]
	jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
		if (err) return res.status(401).json({message: err.message})
		req.user = decoded
		next()
	})
}
app.get('/profile', verifyToken, (req, res) => {
	res.json(req.user)
})

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
