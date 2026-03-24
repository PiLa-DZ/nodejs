const mongoose = require('mongoose')

const todoSchema = mongoose.Schema(
	{
		task: {
			type: String,
			required: [true, `Please enter task name`]
		},
		completed: {
			type: Boolean,
			required: true,
			default: false
		}
	}
)

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo
