import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Contact from './components/contact';
import Home from './components/Home';
import Navbar from './components/navbar';

const Router =()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={"/"} element={<Home/>} exact={true} />
    <Route path={"/contact"} element={<Contact/>} exact={true} />
    <Route path={"/about"} element={<About/>} exact={true} />
    </Routes>
    </BrowserRouter>

  )
}
export default Router