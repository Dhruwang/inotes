import React,{useEffect} from 'react'
import { useLocation,Link } from 'react-router-dom'

export default function Navbar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class={`nav-link ${location==='/'?'active':''}`} to="/">Home </Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link ${location==='/'?'active':''}`}to="/about">About</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  </>
  )
}
