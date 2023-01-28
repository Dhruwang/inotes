import React, { useState, useContext } from 'react'
import TodoContext from '../context/todos/todoContext'

export default function NewTaskList() {
    const [empty, setempty] = useState(true)
    const context = useContext(TodoContext)
    const { createTodo,getTodos } = context

    const cancel = ()=>{
        const newTask = document.getElementById("newTaskList")
        newTask.style.display = "none"
    }

    const addNewTask = () => {
        setempty(false)
        const newTaskDiv = document.createElement("div")
        newTaskDiv.classList.add("task")
        newTaskDiv.classList.add("newTask")
        const input = document.createElement("input")
        input.classList.add("newTaskInput")
        newTaskDiv.insertAdjacentElement("afterbegin", input)
        newTaskDiv.insertAdjacentElement("afterbegin", input)
        const taskList = document.getElementById("taskList")
        taskList.insertAdjacentElement("afterbegin", newTaskDiv)

    }
    const saveTask = () => {
        const newTaskList = document.getElementsByClassName("newTaskInput")
        const taskArr = []
        let arrIndex = 0
        for (let index = 0; index < newTaskList.length; index++) {
            if (newTaskList[index].value !== "") {
                taskArr[arrIndex] = newTaskList[index].value;
                arrIndex = arrIndex + 1;
            }

        }
        createTodo(taskArr);
        const newTask = document.getElementById("newTaskList")
        newTask.style.display = "none"
        getTodos()

    }
    return (
        <div className='newTaskList' id='newTaskList'>
            <div className='tasklist' id='taskList'>
                <div className='d-flex justify-content-end'>
                    <button className={`newTodo ${empty ? "d-none" : ""}`} onClick={saveTask}>Save</button>
                    <button className='newTodo mx-2' onClick={addNewTask}>Add <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle-fill mx-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg></button>
                    <button className='newTodo' onClick={cancel}>
                        Cancel
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-slash-circle mx-2" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z" />
                        </svg>
                    </button>
                </div>

            </div>
        </div>
    )

}
