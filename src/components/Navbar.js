import React from 'react'
import { useLocation,Link } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation();
  
  return (
    <>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
          <Link className={`nav-link ${location==='/'?'active':''}`} to="/">Home </Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location==='/'?'active':''}`}to="/about">About</Link>
        </li>
    </ul>
    <div className="logSign mx-3">
    <Link className="btn btn-primary mx-1" to="/login" role="button">LogIn</Link>
    <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
    </div>
  </div>
</nav>
  </>
  )
}
