import React from 'react'
import TaskList from './TaskList'

export default function Todo() {
  return (
    <div className='todo'>
        <h1>Manage Your<span> todos !</span></h1>
        <p>Currently running</p>
        <TaskList />
    </div>
  )
}
