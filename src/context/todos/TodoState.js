import React, { useState } from "react";
import TodoContext from "./todoContext";


export default function TodoState(props) {
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

    }
    return (
        <TodoContext.Provider value={{getTodos}}>
      {props.children}
    </TodoContext.Provider>
    )
}
