import React,{useState,useContext} from 'react'
import TodoContext from '../context/todos/todoContext'

export default function NewTaskList() {
    const [empty, setempty] = useState(true)
    const context = useContext(TodoContext)
    const {createTodo} = context

    const addNewTask=()=>{
        setempty(false)
        const newTaskDiv = document.createElement("div")
        newTaskDiv.classList.add("task")
        newTaskDiv.classList.add("newTask")
        const input = document.createElement("input")
        input.classList.add("newTaskInput")
        newTaskDiv.insertAdjacentElement("afterbegin",input)
        newTaskDiv.insertAdjacentElement("afterbegin",input)
        const taskList = document.getElementById("taskList")
        taskList.insertAdjacentElement("afterbegin",newTaskDiv)
 
    }
    const saveTask = ()=>{
        const newTaskList = document.getElementsByClassName("newTaskInput")
        const taskArr = []
        let arrIndex = 0
        for (let index = 0; index < newTaskList.length; index++) {
            if(newTaskList[index].value!==""){
                taskArr[arrIndex] = newTaskList[index].value;
                arrIndex = arrIndex+1;
            }
            
        }
        createTodo(taskArr);
        const newTask = document.getElementById("newTaskList")
        newTask.style.display = "none"

    }
    return (
        <div className='newTaskList' id='newTaskList'>
            <div className='tasklist' id='taskList'>
                <div className='d-flex justify-content-end'>
                <button className={`newTodo ${empty?"d-none":""}`} onClick={saveTask}>Save</button>
                <button className='newTodo mx-2' onClick={addNewTask}>Add <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle-fill mx-2" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg></button>
                </div>
                
            </div>
        </div>
    )

}
