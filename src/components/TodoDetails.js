import React, { useContext, useEffect, useState } from 'react'
import TodoContext from '../context/todos/todoContext'
import mongoose from 'mongoose';

export default function TodoDetails() {
    const context = useContext(TodoContext)
    const { fetchTodo, todos } = context

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
                        {console.log(todos)}
                        Created {mongoose.Types.ObjectId(todos[0]._id).getTimestamp()}
                    </div>
                </div>
            </div>
        </div>
    )
}
