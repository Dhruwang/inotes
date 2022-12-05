import React from 'react'

export default function NoteItems(props) {
    const {note} = props
    return (
        <div class="card col-md-4 my-3" >
            <div>
                    <div class="card-body">
                        <h5 class="card-title">{note.title}</h5>
                        <p class="card-text">{note.description}</p>
                    </div>
            </div>
        </div>
    )
}
