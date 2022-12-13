import React, { useState, useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function AddNotes() {
  const context = useContext(NoteContext)
  const { AddNotes } = context;

  const [note, setNote] = useState({ title: "", description: "" })

  const handleOnClick = (event) => {
    event.preventDefault()
    AddNotes(note.title, note.description)
  }
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" name='title' onChange={onChange} />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" id="description" name='description' onChange={onChange} />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handleOnClick}>Submit</button>
      </form>
    </div>
  )
}
