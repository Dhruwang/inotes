import React from 'react'
import { useLocation,Link,useNavigate } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation();
  let Navigate = useNavigate();

  const handleLogOut = ()=>{
    console.log("runnung")
    localStorage.removeItem('token')
    Navigate("/login")
  }
  
  return (
    <>

  <nav className="navbar navbar-expand-lg ">
    <Link>NoteSpace</Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list-nested text-light" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"/>
</svg>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
    <li className="nav-item active">
          <Link className={`nav-link ${location==='/'?'active':''}`} to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location==='/'?'active':''}`}to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location==='/'?'active':''}`}to="/about">tools</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location==='/'?'active':''}`}to="/about">account</Link>
        </li>
    </ul>
    {!localStorage.getItem("token")?<div className="logSign mx-3">
    </div>:<button className="btn btn-primary mx-1" onClick={handleLogOut} role="button">Logout</button>}
  </div>
</nav>
  </>
  )
}
