import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const initialNote = []
  const [notes, setnotes] = useState(initialNote)
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZmFjYjE3YTQ4MTNlZGUwMTBlOWUwIn0sImlhdCI6MTY2OTMxMTY3N30.V52vIpR74zUX8gK4HGAxtrNoMMTveQZ2X3Doy39CdKA'
      },
    });
    const json = await response.json()
    console.log(json)
    setnotes(json)
  }
  // To add Notes 
  const AddNotes = async (title, description) => {
    await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZmFjYjE3YTQ4MTNlZGUwMTBlOWUwIn0sImlhdCI6MTY2OTMxMTY3N30.V52vIpR74zUX8gK4HGAxtrNoMMTveQZ2X3Doy39CdKA'
      },
      body: JSON.stringify({ title, description })
    });
    console.log('adding note')

    const note = {
      "_id": "638b3df7c91a0d3a9e3e623d5",
      "user": "637facb17a4813ede010e9e0",
      "title": title,
      "description": description,
      "__v": 0
    }
    setnotes(notes.concat(note))
  }
  // To delete Notes 
  const DeleteNotes = async (id) => {
    await fetch(`${host}/api/notes/deletenode/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3ZmFjYjE3YTQ4MTNlZGUwMTBlOWUwIn0sImlhdCI6MTY2OTMxMTY3N30.V52vIpR74zUX8gK4HGAxtrNoMMTveQZ2X3Doy39CdKA'
      },
    });
    const newNote = notes.filter((note) => { return note._id !== id })
    setnotes(newNote)
  }

  // To update Notes 

  const UpdateNotes = async (id, title, description) => {
    // API Call 

    for (let index = 0; index < notes.length; index++) {
      if (notes[index]._id === id) {
        notes[index].title = title;
        notes[index].description = description;
      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, setnotes, AddNotes, DeleteNotes, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;