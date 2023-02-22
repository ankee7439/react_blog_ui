import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <div className="navbar">
    <div className="container">
      <div className="logo"><Link to="/" className='logo'>Logo</Link></div>
      <div className="links">
        <Link className='link' to="/?cart=art">
          <h6>ARTS</h6>
        </Link>
        <Link className='link' to="/?cart=art">
          <h6>SCIENCE</h6>
        </Link>   <Link className='link' to="/?cart=art">
          <h6>TECHNOLOGY</h6>
        </Link>
        <Link className='link' to="/?cart=art">
          <h6>MOVIES</h6>
        </Link> 
        <Link className='link' to="/?cart=art">
          <h6>DESIGN</h6>
        </Link> <Link className='link' to="/?cart=art">
          <h6>FOOD</h6>
        </Link>
        <span>Ankit</span>
        <span>Logout</span>
        <span className='write'>
          <Link to="/write" className='link'>Write</Link>
        </span>
       
      </div>
    </div>
   </div>
  )
}

export default Navbar
