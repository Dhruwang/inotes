import React,{useEffect,useContext} from 'react'
import TaskList from './TaskList'
import TodoContext from '../context/todos/todoContext';
import NewTaskList from './NewTaskList';

export default function Todo() {
  const context = useContext(TodoContext)
  const {getTodos,todos} = context;

  useEffect(() => {
    getTodos();
    
  }, [])
  return (
    todos && <div className='todo'>
      <h1>Manage Your<span> todos !</span></h1>
      <div className=' d-flex justify-content-center'>
        <button className = " newTodo">
        <h3>NEW TODO</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-clipboard-plus" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 7a.5.5 0 0 1 .5.5V9H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V10H6a.5.5 0 0 1 0-1h1.5V7.5A.5.5 0 0 1 8 7z" />
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
      </svg>
      </button>
      </div>
      <p>Currently running</p>
      <div className='todoContainer d-flex'>
        <div className='new'>
        <NewTaskList />
        </div>
      {todos && todos.map((element)=>{
        return <TaskList taskCompleted={element["taskCompleted"]} taskRemaining={element["taskRemaining"]} id ={element["_id"]}/>
      })}
      </div>
      
      <p>Previously Created</p>

    </div>
  )
}
