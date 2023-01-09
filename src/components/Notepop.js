import React,{useContext,useEffect,useState} from 'react'
import NoteContext from '../context/notes/noteContext'


export default function Notepop() {
  const context = useContext(NoteContext)
  const {notebyId, notes, getNotes, editNotes, getNotesById } = context;

  const fetchNoteId=()=>{
    let index = window.location.href.lastIndexOf("/")
    getNotesById(window.location.href.slice(index+1,))
  }

  useEffect(() => {
    fetchNoteId()
  }, [])
  
  return (
    <div class="notepop">
        <div className='notepopinner'>
          {notebyId && console.log(notebyId)}
            <h1>{notebyId[0]['title']}</h1>
            <p>{notebyId[0]['description']}</p>
        </div>
    </div>
  )
}
