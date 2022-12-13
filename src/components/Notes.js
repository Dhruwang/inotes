import React, { useContext, useEffect, useRef,useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';


export default function Notes() {
  const context = useContext(NoteContext);
  const { notes, setnotes, getNotes } = context;
  const ref = useRef(null)
  const [note, setNote] = useState({ etitle: "", edescription: "" })


  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({etitle : currentNote.title, edescription:currentNote.description})
  }


  useEffect(() => {
    getNotes()
  }, [])
 
  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
  }

  const handleClick = (e)=>{
    console.log(note)
    e.preventDefault()
  }

  return (
    <>
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div class="mb-3">
                  <label for="title" class="form-label">Title</label>
                  <input type="text" class="form-control" id="etitle" name='etitle' value={note.etitle}  onChange={onChange} />
                </div>
                <div class="mb-3">
                  <label for="description" class="form-label">Description</label>
                  <input type="text" class="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container px-4'>
        <div className='row'>
          {notes.map((note) => {
            return <NoteItems updateNote={updateNote} note={note} />
          })}
        </div>
      </div>
    </>
  )
}
