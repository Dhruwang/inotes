import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/todos/todoContext'
import mongoose from 'mongoose';

export default function TodoDetails() {
    const context = useContext(TodoContext)
    const { fetchTodo, todos } = context
    const [date, setdate] = useState([])
    // const [date, setdate] = useState("")

    const getTodo = () => {
        const index = window.location.href.lastIndexOf("/")
        const todoId = window.location.href.slice(index + 1,)
        fetchTodo(todoId)
        
    }



    useEffect(() => {
        getTodo()
    }, [])


    return (
        todos && <div className='todoDetailsMain'>
            <div className='todoDetails'>
                <div className='todoDetailsTask'>
                    <div className='todoCreationDate'>
                        Created : {date[0]}
                        {console.log(date)}  
                    </div>
                </div>
            </div>
        </div>
    )
}
