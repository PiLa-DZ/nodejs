module.exports = function (req, res, next) {
	console.log('Middleware 3')
	next()
}
