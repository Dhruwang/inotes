const express= require("express")
const fetchUser = require("../middleware/fetchUser")
const todos = require("../models/Todo.model")

const router = express.Router()


router.get("/fetchTodos",fetchUser,async(req,res)=>{
    try {
        const userId = req.user.id
    const allTodos = await todos.find({user:userId},{"task":1})
    res.send(allTodos)
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ err: "internal server error" })
    }
    
})
router.post("/CreateTodos",fetchUser,async(req,res)=>{
    try {
        const Newtodo = req.body

    if(Newtodo.taskArr.legth===0){
        res.status(400).json({"err":"Empty array"})
        return
    }
    const todo = new todos({
        user:req.user.id,task:Newtodo.taskArr
    })
    const savedtodo = await todo.save()
    res.status(201).send(savedtodo)
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ err: "internal server error" })
    }
    
})

module.exports = router;