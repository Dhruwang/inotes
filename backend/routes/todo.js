const express= require("express")
const fetchUser = require("../middleware/fetchUser")
const todos = require("../models/Todo.model")

const router = express.Router()

const todo = ["Take Bath","Study","Do Home Work","Gym"]

router.get("/fetchTodos",fetchUser,async(req,res)=>{
    // const todo = await todos.find({})
    res.send(todo)
})

module.exports = router;