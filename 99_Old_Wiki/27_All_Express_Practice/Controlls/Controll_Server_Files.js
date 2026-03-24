const path = require('path')

// Home page
const serveHomePage = (req, res) => {
	res.sendFile(path.join(__dirname, '../Public', 'index.html'))
}
// About page
const serveAboutPage = (req, res) => {
	res.sendFile(path.join(__dirname, '../Public', 'about.html'))
}
// Help page
const serveHelpPage = (req, res) => {
	res.sendFile(path.join(__dirname, '../Public', 'help.html'))
}

module.exports = {
	serveHomePage,
	serveAboutPage,
	serveHelpPage
}
