import React from 'react'
import { useContext } from 'react'
import NoteContext from '../context/notes/noteContext'
export default function Home(props) {
    const a = useContext(NoteContext)
  return (
    <div>I am {a.name}</div>
  )
}
