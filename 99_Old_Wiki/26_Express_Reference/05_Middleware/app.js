const middle3 = require('./middlewares/middle3.js')
const middle4 = require('./middlewares/middle4.js')
const morgan  = require('morgan')
const express = require('express')
const app = express()

app.use(morgan('tiny'))
app.use((req, res, next) => {
	console.log('Middleware 1')
	next()
})

const middle2 = (req, res, next) => {
	console.log('Middlaware 2')
	next()
}

app.use(middle2, middle3, middle4)

app.get('/', (req, res) => {
	res.send('Home...')
})

app.listen(3000)
