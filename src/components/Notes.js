import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';
import { useNavigate } from 'react-router-dom';


export default function Notes(props) {
  const context = useContext(NoteContext);
  const [noteLength, setnoteLength] = useState(-90)
  const { notes, getNotes, editNotes } = context;
  const ref = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "" })
  const Navigate = useNavigate()


  const updateNote = (currentNote) => {
    ref.current.click()
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description })
  }


  useEffect(() => {

    if (localStorage.getItem('token')) {
      getNotes()
    }
    else {
      Navigate("/login")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = (event) => {
    setNote({ ...note, [event.target.name]: event.target.value })
    setnoteLength(event.target.value.length)
    let wordCounterOuter = document.getElementById("wordCounterOuter")
    if (noteLength<300) {
      wordCounterOuter.style.backgroundImage = `conic-gradient(darkgreen 0deg,darkgreen ${noteLength}deg,grey ${noteLength}deg,grey 360deg)`
    }
    else{
      wordCounterOuter.style.backgroundImage = `conic-gradient(red 0deg,red ${noteLength}deg,grey ${noteLength}deg,grey 360deg)`
    }
    
  }

  const handleClick = (e) => {
    editNotes(note.id, note.etitle, note.edescription)
    e.preventDefault()
    props.showAlert("success", "notes Updated successfully")
    
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
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name='etitle' value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label for="description" className="form-label">Description</label>
                  <textarea rows="4" cols="50" type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
                </div>
                <div className='wordCounterBar'>
                  <div className='wordCounterOuter' id='wordCounterOuter'><div className='wordCounterInner'></div></div>
                  
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" disabled={note.etitle.length < 5 || note.edescription.length < 5} data-bs-dismiss="modal" onClick={handleClick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className='Notecontainer '>
        {notes.length === 0 && "no notes to Display"}
        <div className='row'>
          {notes.map((note) => {
            return <NoteItems updateNote={updateNote} note={note} />
          })}
        </div>
      </div>
    </>
  )
}
