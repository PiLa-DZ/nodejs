const {
	getAllTodos,
	getOneTodo
} = require('../controlles/todos_controlle.js')
const router = require('express').Router()

router.route('/').get(getAllTodos)
router.route('/:id').get(getOneTodo)

module.exports = router
