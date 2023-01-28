const express = require("express")
const fetchUser = require("../middleware/fetchUser")
const todos = require("../models/Todo.model")

const router = express.Router()


router.get("/fetchTodos", fetchUser, async (req, res) => {
    try {
        const userId = req.user.id
        const allTodos = await todos.find({ user: userId }).sort({ "_id": -1 })
        res.send(allTodos)
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ err: "internal server error" })
    }

})
router.post("/CreateTodos", fetchUser, async (req, res) => {
    try {
        const Newtodo = req.body
        if (Newtodo.length === 0) {
            res.status(400).json({ "err": "Empty array" })
            return
        }
        const todo = new todos({
            user: req.user.id, taskRemaining: Newtodo
        })
        const savedtodo = await todo.save()
        res.status(201).send(savedtodo)
    } catch (error) {
        console.log(error.message)
        res.status(401).json({ err: "internal server error" })
    }

})

router.put("/taskCompleted", fetchUser, async (req, res) => {
    const todoId = req.body.id;
    const task = req.body.task;
    const reqTodo = await todos.findOne({ _id: todoId })
    reqTodo.taskCompleted.push(task)
    reqTodo.taskRemaining = reqTodo.taskRemaining.filter((element) => {
        return element != task;
    })
    reqTodo.save()
    res.send(reqTodo)

})
router.delete("/deleteTodo", fetchUser, async (req, res) => {
    try {
        const todoId = req.query.id;
        let reqTodo = await todos.findById(todoId)
        // to check whether todo exist in database
        if (!reqTodo) {
            return res.status(400).json({ "err": "no such todo exist" })
        }
        // to check whether user is authenticated to delete todo
        if (reqTodo.user.toString() !== req.user.id) {
            return res.status(401).send('not allowed')
        }
        // After these two checks user is allowed to delete node 
        const todo = await todos.findByIdAndDelete(todoId)
        res.status(200).json({ "message": "todo deleted successfully" })
    } catch (error) {

    }





})

module.exports = router;