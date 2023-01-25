import React,{useState,useEffect} from 'react'

// function to check and uncheck task
export default function Task(props) {

  const [status, setstatus] = useState(false)
  

  const handleTaskClick=()=>{
    if(status===true){
      setstatus(false)
    }
    else{
      setstatus(true)
    }
  } 
  return (
    <div className='task'>
      <button className='btn'  onClick={handleTaskClick}>
         <div className={`checkbox ${status?"fillPink":""}`} aria-checked={status} id={`taskCheck`}></div>
      </button>
       
        <div className='taskContent' id={`taskContent`}>
          <span className={`${status?"strike":""}`}>{props.task}</span>
          
        </div>
    </div>
  )
}
