import React,{useContext} from 'react'
import NoteContext from '../context/notes/noteContext'
import NoteItems from './NoteItems';


export default function Notes() {
    const context = useContext(NoteContext);
     const {notes,setnotes } = context;
  return (
    <div className='row'>
        {notes.map((note)=>{
      return <NoteItems note={note}/>
    })}
    </div>
  )
}
