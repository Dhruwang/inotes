import React, { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'

export default function NoteItems(props) {
    const context = useContext(NoteContext)
    const {DeleteNotes} = context;
    const {note} = props
    
    return (
        <div class="card col-4 my-3" >
            <div>
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                        <i class="fa-solid fa-trash mx-2" onClick={()=>{DeleteNotes(note._id)}}></i>
                        <i class="fa-solid fa-pen-to-square mx-2"></i>
                    </div>
            </div>
        </div>
    )
}
