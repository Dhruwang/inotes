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
                        Created : {todos[0]["createdAt"].slice(0, 10) + " at " + todos[0]["createdAt"].slice(11, 19)}
                    </div>
                    <h5>Total Tasks : {todos[0].taskRemaining.length + todos[0].taskCompleted.length}</h5>
                    <h5>Tasks Remaining</h5>
                    {todos[0].taskRemaining.map((element, index) => {
                        return <p><div className='checkboxRed'></div> {element}</p>
                    })}
                    <h5>Tasks Completed</h5>
                    {todos[0].taskCompleted.map((element, index) => {
                        return <p><div className='checkbox'></div> {element}</p>;
                    })}
                </div>
            </div>
        </div>
    )
}
