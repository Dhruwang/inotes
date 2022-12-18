import React from 'react'
import { useLocation,Link } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation();
  
  return (
    <>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
          <Link class={`nav-link ${location==='/'?'active':''}`} to="/">Home </Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location==='/'?'active':''}`}to="/about">About</Link>
        </li>
    </ul>
    <div class="logSign mx-3">
    <Link class="btn btn-primary mx-1" to="/login" role="button">LogIn</Link>
    <Link class="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
    </div>
  </div>
</nav>
  </>
  )
}
