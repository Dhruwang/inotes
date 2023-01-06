import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
        <div className='content'>
              <h1 className='title'>NOTESPACE</h1> 
              <p>"Welcome to Notespace, where you can easily organize and access all of your notes in one place!"</p>
              <button className='HomeButton mx-2'>What is notespace ?</button>  
              <Link className='HomeButton mx-2'  to="/login" role="button">login</Link>  
        </div>

    </div>
  )
}
