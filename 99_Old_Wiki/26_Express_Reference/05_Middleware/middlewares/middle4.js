module.exports = (req, res, next) => {
	console.log('Middleware 4')
	next()
}
