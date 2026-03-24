# What you can do with my server
## Serve Files
    http://localhost:3000/         --> Home Page
    http://localhost:3000/about    --> About Page
    http://localhost:3000/help     --> Help Page
    http://localhost:3000/anything --> Page Not Found
## 2D Array API
### Get array dimensions by (params id)
    http://localhost:3000/array
        --> Get all array elements
           ['A', 'B', 'C'],
           ['D', 'E', 'F'],
           ['G', 'H', 'I']
    http://localhost:3000/array/x/1
        --> Get one column
            [
                "B",
                "E",
                "H"
            ]
    http://localhost:3000/array/y/1
        --> Get one row
           ['D', 'E', 'F'],
    http://localhost:3000/array/x/1/y/1
        --> Get one Element
            ['E']
## Random Users API By (MongoDB DataBase)
    http://localhost:3000/randomusers                        --> Get All Random Users
    http://localhost:3000/randomusers/delete_all             --> Delete All Random Users
    http://localhost:3000/randomusers/create_all             --> Create All Random Users
    http://localhost:3000/randomusers/query?search=a         --> Search in Random Users by name
    http://localhost:3000/randomusers/query?search=a&limit=2 --> Search and limit the result
## Products API By (MongoDB DataBase) Using (Httpie)
    $ http localhost:3000/api/products                       --> Get All Products
    $ http localhost:3000/api/products/:id                   --> Get One Product By Id
    $ http localhost:3000/api/products/create_all            --> Create All Products
    $ http post localhost:3000/api/products name=ProName     --> Create One Product
    $ http localhost:3000/api/products/delete_all            --> Delete All Products
    $ http delete localhost:3000/api/products/:id            --> Delete One Product By Id
    $ http put localhost:3000/api/products/:id name=ProName  --> Update One Product By Id

    // Note: you have to change :id with Product id
    // Note: To use (http) from terminal you have to do
        1 --> Install Python3
        2 --> Install Httpie
        3 --> Create Python Environment
        4 --> Run Python Environment
## Users API By (MongoDB DataBase) Using (Httpie)
    $ http localhost:3000/api/users                       --> Get All Users
    $ http localhost:3000/api/users/:id                   --> Get One User By Id
    $ http localhost:3000/api/users/create_all            --> Create All Users
    $ http post localhost:3000/api/users name=UserName    --> Create One User
    $ http localhost:3000/api/users/delete_all            --> Delete All Users
    $ http delete localhost:3000/api/users/:id            --> Delete One User By Id
    $ http put localhost:3000/api/users/:id name=ProName  --> Update One User By Id

    // Note: you have to change :id with User id
    // Note: To use (http) from terminal you have to do
        1 --> Install Python3
        2 --> Install Httpie
        3 --> Create Python Environment
        4 --> Run Python Environment
## Todos API By (MongoDB DataBase) Using (Httpie)
    $ http localhost:3000/api/todos                       --> Get All Todos
    $ http localhost:3000/api/todos/:id                   --> Get One Todo By Id
    $ http localhost:3000/api/todos/create_all            --> Create All Todos
    $ http post localhost:3000/api/todos task=TaskName    --> Create One Todo
    $ http localhost:3000/api/todos/delete_all            --> Delete All Todos
    $ http delete localhost:3000/api/todos/:id            --> Delete One Todo By Id
    $ http put localhost:3000/api/todos/:id task=TaskName --> Update One Todo By Id

    // Note: you have to change :id with Todo id
    // Note: To use (http) from terminal you have to do
        1 --> Install Python3
        2 --> Install Httpie
        3 --> Create Python Environment
        4 --> Run Python Environment
