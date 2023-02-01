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

  return (
    <>
      <div className='Notecontainer '>
        <p className='text-light mx-4'>{notes.length === 0 && "no notes to Display"}</p>
        <div className='row'>
          {notes.map((note) => {
            return <NoteItems updateNote={updateNote} note={note} showPopup={props.showPopup} />
          })}
        </div>
      </div>
    </>
  )
}
