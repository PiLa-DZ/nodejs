" Run MongoDB Shell "(CLI)" ============================================= "
$ mongosh
cls
exit
help
" List All DataBases ==================================================== "
show databases
show dbs
" Show Current DataBase ================================================= "
db
" List All Collections ================================================== "
show collections
" Create or Swetch Database ============================================= "
use myNewDatabase

" Create ================================================================ "
db.users.insertOne({ name: "Ahmed", age: 25, skill: "Arch Linux" })
db.users.insertMany([{name: "Nabil", age: 35, skill: "Programmer"}, {name: "Rayan", age: 10, skill: "Teacher"}])
" Read ================================================================== "
db.users.find()
db.users.findOne({})
db.users.find().count()
db.users.find().limit(2).count()
db.users.find().sort({name: 1})
db.users.find().sort({name: -1})
" Update ================================================================ "
db.users.updateOne({ name: "Ahmed" }, { $set: { age: 26 } })
db.users.updateMany({???})
" Delete ================================================================ "
db.users.deleteOne({ name: "Ahmed" })
db.users.deleteMany({})

" How to add Nested Document "
" How to use $ Operator and Complex Queries ($gt $lt $or)"
" How to use $in and $nin"

" MongoDB Drivers"
" Install Mongodb for node.js"
" Connecting To MongoDB"
" Fetching Data"
