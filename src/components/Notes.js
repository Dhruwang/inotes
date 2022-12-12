import React,{useContext, useEffect} from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';


export default function Notes() {
    const context = useContext(NoteContext);
     const {notes,setnotes,getNotes } = context;
     useEffect(() => {
       getNotes()
     }, [])
     
  return (
    <div className='container px-4'>
    <div className='row'>
        {notes.map((note)=>{
      return <NoteItems note={note}/>
    })}
    </div>
    </div>
  )
}
