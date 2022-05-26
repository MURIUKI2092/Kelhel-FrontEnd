import React, { useState } from 'react'
import logo from "../images/logo.png"
import "../styles/navbar.css"

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