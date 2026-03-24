app.listen(port2, host, () => {
	console.log(`Server listening on ${host}:${port2}...`)
	console.log(`
// --> all possible you can do with this server
// --> Serve Files --------------------------->
       localhost:3000
       localhost:3000/about
       localhost:3000/help
// --> You can get the array elements -------->
	   ['A', 'B', 'C'],
	   ['D', 'E', 'F'],
	   ['G', 'H', 'I']
    // By typing
       localhost:3000/array
       localhost:3000/array/x/1/y/1
       localhost:3000/array/x/1
       localhost:3000/array/y/1
	`)
})
