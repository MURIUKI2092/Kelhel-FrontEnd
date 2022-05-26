import React from 'react'
import logo from "../images/logo.png"
import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <section className='logo'>
        <img
        src={logo}
        alt='logo here'/>
      </section>

      <div  className='otherInfo'>
      <section className='home'>
        <li><h3>HOME</h3></li>
      </section>
      <section className='about'>
        <li><h3>ABOUT</h3></li>
      </section>
      <section className='project'>
        <li><h3>PROJECTS</h3></li>
      </section>
      <section className='products'>
        <li><h3>PRODUCTS</h3></li>
      </section>
      <section className='contact'>
        <li><h3>CONTACT</h3></li>
      </section>
      </div>
      
    </div>
  )
}

export default Navbar