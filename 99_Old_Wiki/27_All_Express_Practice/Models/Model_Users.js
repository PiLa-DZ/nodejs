const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, `Please enter user name`]
		},
		age: {
			type: Number,
			required: true,
			default: 18
		}
	}
)

const User = mongoose.model("User", userSchema)

module.exports = User
