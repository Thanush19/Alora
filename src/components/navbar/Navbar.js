import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <Link to="/idea">IDEA</Link>
        <Link to="/about">ABOUT</Link> 
        <Link to="/contact">CONTACT</Link>
    </>
     
  )
}

export default Navbar