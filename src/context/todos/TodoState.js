import React, { useState } from "react";
import TodoContext from "./todoContext";


export default function TodoState(props) {
    const [todos, settodos] = useState()
    const host = 'http://localhost:5000'

    const getTodos = async () => {
        const response = await fetch(`${host}/api/todos/fetchTodos`, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json()
        console.log(json)
        settodos(json)

    }
    return (
        <TodoContext.Provider value={{getTodos,todos}}>
      {props.children}
    </TodoContext.Provider>
    )
}
