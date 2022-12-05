import React ,{useContext}from 'react'
import NoteContext from '../context/notes/noteContext'

export default function Home(props) {
     const context = useContext(NoteContext);
     const {notes,setnotes } = context;
  return (
    <>
    <h1>Add a note</h1>
    <h1>View Your notes</h1>
    {notes.map((note)=>{
      return note.title;
    })}
    </>
  )
}
