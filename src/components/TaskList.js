import React,{useContext,useEffect} from 'react'
import Task from './Task'

export default function TaskList(props) { 
  console.log(props.taskArr)
  return (
    props.taskArr && <div className='tasklist'>
      {console.log(props.taskArr)}
      {props.taskArr.map((element,index)=>{
        return <Task task={element} index={index} />
      })}
       
      
    </div>
  )
}
