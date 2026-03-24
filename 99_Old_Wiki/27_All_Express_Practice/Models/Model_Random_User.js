const mongoose = require('mongoose')

const randomUserSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter random user name']
		}
	}
)
const RandomUser = mongoose.model("RandomUser", randomUserSchema)

module.exports = RandomUser
