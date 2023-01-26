import React,{useState,useEffect,useContext} from 'react'
import TodoContext from '../context/todos/todoContext'

// function to check and uncheck task
export default function Task(props) {
  const context = useContext(TodoContext)
  const {markTaskAsCompleted} = context

  const [status, setstatus] = useState(false)
  

  const handleTaskClick=()=>{
    if(status===true){
      alert("already checked")
    }
    else{
      setstatus(true)
      markTaskAsCompleted(props.id,props.task)
    }
  } 
  useEffect(() => {
    if(props.index===-1){
      setstatus(true)
    }
  }, [])
  
  return (
    <div className='task'>
      <button className='btn'  onClick={handleTaskClick}>
         <div className={`checkbox ${status ?"fillPink":""}`} aria-checked={status} id={`taskCheck`}></div>
      </button>
       
        <div className='taskContent' id={`taskContent`}>
          <span className={`${status?"strike":""}`}>{props.task }</span>
          
        </div>
    </div>
  )
}
