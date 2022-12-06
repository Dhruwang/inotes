import React from 'react'
import AddNotes from './AddNotes'
import Notes from "./Notes"

export default function Home(props) {
     
  return (
    <>
    <h1>Add a note</h1>
    <AddNotes />
    <h1>View Your notes</h1>
    <Notes />
    </>
  )
}
