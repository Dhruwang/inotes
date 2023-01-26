import React from 'react'

export default function NewTaskList() {

    const addNewTask=()=>{
        const taskList = document.getElementById("taskList")
        // const tempDiv = document.createElement('div');
        const task = document.getElementById("task") ;
        const newTask = task.cloneNode(true)
        taskList.insertAdjacentElement("afterbegin",newTask)
        // console.log(task)
    }
    return (
        <div className='newTaskList'>
            <div className='tasklist' id='taskList'>
                <div className="task" id='task'>
                    <span className="checkbox mx-2"></span>
                    <input type="text" className='newTaskInput'>

                    </input>
                    <button className='btn' onClick={addNewTask}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-circle-fill text-light" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                    </svg>
                    </button>
                    
                </div>
            </div>
        </div>
    )

}
