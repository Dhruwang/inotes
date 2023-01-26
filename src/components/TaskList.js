import React,{useContext,useEffect} from 'react'
import Task from './Task'

export default function TaskList(props) { 
  return (
    (props.taskCompleted || props.taskRemaining) && <div className='tasklist'>
      {props.taskRemaining.map((element,index)=>{
        return <Task task={element} index={index} key={index} id={props.id} />
      })}
      {props.taskCompleted.map((element,index)=>{
        return <Task task={element} index={-1} key={index} id={props.id}/>
      })}
       
      
    </div>
  )
}
