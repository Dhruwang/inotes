import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import Task from './Task'
import TodoContext from '../context/todos/todoContext'

export default function TaskList(props) {
  const navigate = useNavigate();
  const context = useContext(TodoContext)
  const { deleteTodo } = context

  function handleDelete() {
    deleteTodo(props.id)
    window.location.reload();
  }

  function viewDetails() {
    navigate(`/todo/viewDetails/${props.id}`)
  }
  return (
    (props.taskCompleted || props.taskRemaining) && <div className='taskListContainer d-flex'>
      <div className='taskListContainerLeft'>
        <div className='tasklist'>
          {props.taskRemaining.map((element, index) => {
            return <Task task={element} index={index} key={index} id={props.id} />
          })}
          {props.taskCompleted.map((element, index) => {
            return <Task task={element} index={-1} key={index} id={props.id} />
          })}
        </div>
      </div>
      <div className='taskListContainerRight'>
        <button className='deleteTodo btn' onClick={handleDelete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg>
        </button>
        <button className='deleteTodo btn' onClick={viewDetails} >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-bar-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8Zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5Z" />
          </svg>
        </button>
      </div>
    </div>

  )
}
