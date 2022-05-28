import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/contact';
import { Footer } from './components/footer';
import Home from './components/Home';
import Navbar from './components/navbar';
import Products from './components/products'

const Router =()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={"/"} element={<Home/>} exact={true} />
    <Route path={"/contact"} element={<Contact/>} exact={true} />
    <Route path={"/about"} element={<About/>} exact={true} />
    <Route path={"/products"} element={<Products/>} exact={true} />
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}
export default Router