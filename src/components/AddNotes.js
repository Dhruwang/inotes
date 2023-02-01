import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { useNavigate } from "react-router-dom";

export default function AddNotes(props) {
  const context = useContext(NoteContext)
  const { AddNotes,tagArr,setTagArr } = context;
  const navigate = useNavigate();


  const [note, setNote] = useState({ title: "", description: "" })

  const handleOnClick = (event)=>{
    event.preventDefault()
    AddNotes(document.getElementById("addTitle").value, document.getElementById("addDescription").innerHTML)
    navigate("/main")
  }

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }
  return (
    <div className='addNote container'>
      <div className='addNoteInner'>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control fs-1" placeholder='Heading' id="addTitle" name='title' value={note.title} onChange={onChange} />
        </div>
        <hr></hr>
        <div className="my-3">
          <textarea type="text" className="form-control" id="addDescription" placeholder='Description' name='description' value={note.description} onChange={onChange} />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button> 
      </form>
    </div>
    </div>
    
  )
}
