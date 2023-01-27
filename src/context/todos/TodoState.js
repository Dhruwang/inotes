import React, { useState } from "react";
import TodoContext from "./todoContext";


export default function TodoState(props) {
    const [todos, settodos] = useState()
    const host = 'http://localhost:5000'


// Function to create a todo 
const  createTodo=async(taskArr)=>{
    const response = await fetch(`${host}/api/todos/CreateTodos`,{
        method: "POST",
        headers :{
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
        },
        
        body: JSON.stringify(taskArr)
    })
    
}
// Function to fetch all todos 
    const getTodos = async () => {
        const response = await fetch(`${host}/api/todos/fetchTodos`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json()
        settodos(json)

    }
    // function to transfer a task from taskRemaining to taskCompleted 
    const  markTaskAsCompleted=async(id,task)=>{
        console.log(id)
        const response = await fetch(`${host}/api/todos/taskCompleted`,{
            method: "PUT",
            headers :{
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            
            body: JSON.stringify({ id, task})
        })
        
    }
    
    return (
        <TodoContext.Provider value={{getTodos,todos,markTaskAsCompleted,createTodo}}>
      {props.children}
    </TodoContext.Provider>
    )
}
