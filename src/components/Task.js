import React,{useState,useEffect} from 'react'

// function to check and uncheck task
export default function Task() {

  const [status, setstatus] = useState(false)
  

  const toggleStrike=()=>{
    const strike = document.getElementById("strike")
  const nonStrike = document.getElementById("nonStrike")
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
    const taskCheck = document.getElementById("taskCheck")
    const taskContent = document.getElementById("taskContent")
    

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
         <div className='checkbox' aria-checked={status} id='taskCheck'></div>
      </button>
       
        <div className='taskContent' id='taskContent'>
          <s id="strike">Take oUt Trash</s>
          <span id="nonStrike">Take oUt Trash</span>
          
        </div>
    </div>
  )
}
