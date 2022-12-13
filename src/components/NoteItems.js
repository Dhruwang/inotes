import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function NoteItems(props) {
    const context = useContext(NoteContext)
    const {DeleteNotes} = context;
    const {note,updateNote} = props
    
    return (
        <div className="card col-4 my-3" >
            <div>
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <i className="fa-solid fa-trash mx-2" onClick={()=>{DeleteNotes(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
            </div>
        </div>
    )
}
