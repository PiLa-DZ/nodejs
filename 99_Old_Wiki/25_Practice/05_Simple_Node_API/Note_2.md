1. Get all todos
curl http://localhost:3000/todos

2. Create a new todo
curl -X POST http://localhost:3000/todos \
-H "Content-Type: application/json" \
-d '{"task":"New Task","completed":false}'

3. Update a todo
curl -X PUT http://localhost:3000/todos/1 \
-H "Content-Type: application/json" \
-d '{"completed":true}'

4. Delete a todo
curl -X DELETE http://localhost:3000/todos/1
