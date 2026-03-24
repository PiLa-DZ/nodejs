const todos_router = require('./routes/todos_router.js')
const express = require('express')
const app = express()

app.use('/todos', todos_router)

app.listen(3000)
