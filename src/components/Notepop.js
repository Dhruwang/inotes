import React,{useContext,useEffect,useState} from 'react'
import NoteContext from '../context/notes/noteContext'
import { Link } from 'react-router-dom';


export default function Notepop(props) {
  const context = useContext(NoteContext)
  const {notebyId, notes, getNotes, editNotes, getNotesById ,DeleteNotes} = context;

  const handleDelete=()=>{
    console.log("running")
    props.showPopup("Delete", "are you sure you want to delete?")
  }
  

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
          <div className='noterpopinnertop'>
            <div className='left'>
              <Link class="btn back" to="/main">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
</svg>
          </Link>
            </div>
            <div className='right mx-4'>
              <button className='btn' onClick={handleDelete} data-bs-toggle="modal" data-bs-target="#delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
              </button>
               <button className='btn'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
               </button>

            </div>
            
         
          </div>
          
          <div className='notePopContent'>
            <h1>{notebyId[0]['title']}</h1>
            <p>{notebyId[0]['description']}</p>
          </div>
        
            
        </div>
    </div>
  )
}
