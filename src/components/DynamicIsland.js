import React, { useEffect,useState,useContext } from 'react'
import { useNavigate,useLocation  } from "react-router-dom";
import NoteContext from '../context/notes/noteContext'

export default function DynamicIsland(props) {
  let location = useLocation();
  const [btnText, setbtnText] = useState("")
  const navigate = useNavigate();
  const context = useContext(NoteContext)
   const { AddNotes } = context;


  const handleBtnName=()=>{
    if (location.pathname === "/main") {
      setbtnText("Add new note")
    }
    else if (location.pathname === "/createNote") {
      setbtnText("Save")
    }

  }
  const handleClick=(event)=>{
    if(location.pathname==="/main"){
      navigate("/createNote")
    }
    else if(location.pathname === "/createNote"){
      event.preventDefault()
    AddNotes(document.getElementById("addTitle").value, document.getElementById("addDescription").innerHTML)
    navigate("/main")
    // window.location.reload(false);
    // setNote({ title: "", description: "" })
    }
    
  }
  useEffect(() => {
    handleBtnName()
  }, [location])
  
  return (
    <div className='dynamicIsland'>
        <button className='btn' onClick={handleClick}>{btnText}</button>
    </div>
  )
}
