import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function AddNotes(props) {
  const context = useContext(NoteContext)
  const { AddNotes } = context;

  const [note, setNote] = useState({ title: "", description: "" })

  const handleOnClick = (event) => {
    event.preventDefault()
    AddNotes(note.title, note.description)
    setNote({ title: "", description: "" })
    props.showAlert("success","notes added successfully")

  }
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onChange} />
        </div>
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
      </form>
    </div>
  )
}
