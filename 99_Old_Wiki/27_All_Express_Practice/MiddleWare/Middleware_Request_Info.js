module.exports = (req, res, next) => {
	console.clear()
	console.log(`URL    -->`, req.url)
	console.log(`Method -->`, req.method)
	console.log(`Body   -->`, req.body)
	console.log(`Query  -->`, req.query)

	res.on('finish', () => {
		console.log(`Params -->`, req.params)
	})

	next()
}
