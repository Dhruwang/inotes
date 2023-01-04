import React from 'react'
import AddNotes from './AddNotes'
import Notes from "./Notes"

export default function Main(props) {
     
  return (
    <>
    <h1>Add a note</h1>
    <AddNotes showAlert={props.showAlert}/>
    <h1>View Your notes</h1>
    <Notes showAlert={props.showAlert}/>
    </>
  )
}
