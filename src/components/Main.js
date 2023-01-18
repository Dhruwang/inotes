import React from 'react'
import Notes from "./Notes"

export default function Main(props) {
     
  return (
    <div className='main mx-auto'>
    {/* <h3>Add a note</h3>
    <AddNotes showAlert={props.showAlert}/> */}
    <div className='head d-flex align-items-center justify-content-center'>
      <h3 className='m-0'>Notes</h3>
    </div>
    
    <Notes showAlert={props.showAlert}/>
    </div>
  )
}
