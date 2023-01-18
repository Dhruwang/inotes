import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function AddNotes(props) {
  const context = useContext(NoteContext)
  const { AddNotes } = context;
  const tags = ["Personal","Business","Study","Code","Important"]
  let tagMain = []

  const [note, setNote] = useState({ title: "", description: "" })

  const handleTag=(e)=>{
    e.preventDefault()
    const tag = e.target.id
    if(tagMain.includes(tag)){
      tagMain = tagMain.filter((element)=>{
        return element != tag
      })
      document.getElementById(tag).style.backgroundColor = "transparent";
    document.getElementById(tag).innerHTML = "+ " + tag ;
    }
    else{
      tagMain.push(tag)
      document.getElementById(tag).style.backgroundColor = "grey";
    document.getElementById(tag).innerHTML = tag + " x";
    }
    
  }
  const handleOnClick = (event) => {
    event.preventDefault()
    AddNotes(note.title, note.description)
    setNote({ title: "", description: "" })
    // props.showAlert("success","notes added successfully")

  }
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }
  return (
    <div className='addNote container'>
      <div className='addNoteInner'>
      <form>
        <div className="mb-3">
          <input type="text" className="form-control fs-1" placeholder='Heading' id="title" name='title' value={note.title} onChange={onChange} />
        </div>
        <hr></hr>
        {tags.map((element)=>{
            return <button id={element} className='tagname btn mx-2' onClick={handleTag}>+ {element}</button>
        })} 
        <div className="my-3">
          <textarea type="text" className="form-control" id="description" placeholder='Description' name='description' value={note.description} onChange={onChange} />
        </div>
        {/* <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button> */}
      </form>
    </div>
    </div>
    
  )
}
