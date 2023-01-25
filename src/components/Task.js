import React,{useState,useEffect} from 'react'

// function to check and uncheck task
export default function Task(props) {

  const [status, setstatus] = useState(false)
  

  const toggleStrike=()=>{
    const strike = document.getElementById(`strike${props.index}`)
  const nonStrike = document.getElementById(`nonStrike${props.index}`)
    if (status===false) {
      strike.style.display = "none"
      nonStrike.style.display = "block"
    }
    else{
      nonStrike.style.display = "none"
      strike.style.display = "block"
    }
  }
  const handleTaskClick=()=>{
    const taskCheck = document.getElementById(`taskCheck${props.index}`)
    if(status===true){
      taskCheck.style.backgroundColor = "transparent";
      setstatus(false)
    }
    else{
      taskCheck.style.backgroundColor = "rgb(255, 0, 217)" 
      setstatus(true)
    }
  } 
  useEffect(() => {
    toggleStrike()
  
  }, [status])
  
  return (
    <div className='task'>
      <button className='btn'  onClick={handleTaskClick}>
         <div className='checkbox' aria-checked={status} id={`taskCheck${props.index}`}></div>
      </button>
       
        <div className='taskContent' id={`taskContent`}>
          <s id={`strike${props.index}`}>{props.task}</s>
          <span id={`nonStrike${props.index}`}>{props.task}</span>
          
        </div>
    </div>
  )
}
