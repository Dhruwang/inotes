import React,{useContext,useEffect,useState} from 'react'
import NoteContext from '../context/notes/noteContext'
import { Link } from 'react-router-dom';


export default function Notepop() {
  const context = useContext(NoteContext)
  const {notebyId, notes, getNotes, editNotes, getNotesById } = context;
  const [note, setnote] = useState()

  const fetchNoteId=()=>{
    console.log("running")
    let index = window.location.href.lastIndexOf("/")
    getNotesById(window.location.href.slice(index+1,))
  }

  useEffect(() => {
    fetchNoteId()
  }, [])
  
  return (
    notebyId[0] && <div class="notepop">
        <div className='notepopinner'>
          <Link class="btn back" to="/main">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
          </Link>
          <div className='notePopContent'>
            <h1>{notebyId[0]['title']}</h1>
            <p>{notebyId[0]['description']}</p>
          </div>
        
            
        </div>
    </div>
  )
}
