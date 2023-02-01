import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
import { Link } from 'react-router-dom';

export default function NoteItems(props) {
    const context = useContext(NoteContext)
    const {DeleteNotes} = context;
    const {note,updateNote} = props
    
    return (
        <>
        
        <div className="card" >
        <Link to={`note/${note._id}`}>
            <div>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{DeleteNotes(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <div className='noteDate'>{note.createdAt.slice(0,10)}</div>
            </div>
            
            </Link>
        </div>
        
        </>
    )
}
