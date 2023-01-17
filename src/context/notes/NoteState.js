import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const initialNote = []
  const [notes, setnotes] = useState(initialNote)
  const [notebyId, setnotebyId] = useState({})
  
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    setnotes(json)
  }
  const getNotesById = async (id) => {
    console.log("running")
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const json = await response.json()
    const note = await json.filter(({_id})=> _id === id)
      setnotebyId(note)
    }
    
  // To add Notes 
  const AddNotes = async (title, description) => {
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description })
    });
    const note = await response.json()
    setnotes(notes.concat(note))
  }
  // To delete Notes 
  const DeleteNotes = async (id) => {
    await fetch(`${host}/api/notes/deletenode/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
    });
    const newNote = notes.filter((note) => { return note._id !== id })
    setnotes(newNote)
  }

  // To update Notes 

  const editNotes = async (id, title, description) => {
    // API Call 
    console.log("running",id,title,description)
    await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description })
    });
    // const json = response.json();
    // To update note in client 
    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        break;
      }
    }
    setnotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{notebyId, notes, setnotes, AddNotes, DeleteNotes, getNotes, editNotes,getNotesById }}>
      {props.children}
    </NoteContext.Provider>
  )
}
export default NoteState;