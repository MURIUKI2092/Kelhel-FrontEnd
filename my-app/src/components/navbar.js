import React, { useState } from 'react'
import logo from "../images/logo.png"
import "../styles/navbar.css"
import {Link} from 'react-router-dom'
const Navbar = () => {
  const[colorChange,setColorChange]=useState(false)
  const  changeNavbarColor =()=>{
    if(window.scrollY>=80){
      setColorChange(true)
    }else{
      setColorChange(false)
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className={colorChange?'navbar1':"navbar"}>
      <section className='logo'>
        <img
        src={logo}
        alt='logo here'/>
      </section>

      <div  className={colorChange?'otherInfos':'otherInfo'}>
      <section className='myHome'>
      <Link to="/"className="links"  > <li><h3>HOME</h3></li></Link>
        
      </section>
      <section className='myAbout'>
      <Link to="/about"className="links"  > <li><h3>ABOUT</h3></li></Link>
       
      </section>
      <section className='project'>
      <Link to="/about"className="links"  > <li><h3>PROJECTS</h3></li></Link>
      </section>
      <section className='products'>
      <Link to="/products"className="links"  > <li><h3>PRODUCTS</h3></li></Link>
      </section>
      <section className='contact'>
      <Link to="/contact"className="links"  > <li><h3>CONTACT</h3></li></Link>
      </section>
      </div>
      
    </div>
  )
}

export default Navbar