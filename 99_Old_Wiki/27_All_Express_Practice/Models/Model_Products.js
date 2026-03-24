// name, image, price, desc
const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter product name"]
		},
		image: {
			type: String,
			required: true,
			default: "No Image..."
		},
		price: {
			type: Number,
			required: true,
			default: 0
		},
		desc: {
			type: String,
			required: false
		}
	}
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product
