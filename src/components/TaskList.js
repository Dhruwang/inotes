import React,{useContext,useEffect} from 'react'
import Task from './Task'
import TodoContext from '../context/todos/todoContext'

export default function TaskList() {
  const context = useContext(TodoContext)
  const {getTodos,todos} = context;

  useEffect(() => {
    getTodos();
    
  }, [])
  

  

  return (
    todos && <div className='tasklist'>
      {todos.map((element,index)=>{
        return <Task task={element} index={index} />
      })}
    </div>
  )
}
