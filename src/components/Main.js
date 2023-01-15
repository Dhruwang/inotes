import React from 'react'
import AddNotes from './AddNotes'
import Notes from "./Notes"

export default function Main(props) {
     
  return (
    <div className='main mx-auto'>
    {/* <h3>Add a note</h3>
    <AddNotes showAlert={props.showAlert}/> */}
    <h3>All notes</h3>
    <Notes showAlert={props.showAlert}/>
    </div>
  )
}
