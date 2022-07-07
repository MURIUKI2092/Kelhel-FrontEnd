import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './admin/components/login';
import { SideBar } from './admin/components/navbar';
import About from './components/About';
import Contact from './components/contact';
import { Footer } from './components/footer';
import Home from './components/Home';
import Navbar from './components/navbar';
import Products from './components/products'
import Projects from './components/projects';
import Aggregates from './components/aggregates'
import Stones from './components/stones';

const Router =()=>{
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path={"/"} element={<Home/>} exact={true} />
    <Route path={"/contact"} element={<Contact/>} exact={true} />
    <Route path={"/about"} element={<About/>} exact={true} />
    <Route path={"/products"} element={<Products/>} exact={true} />
    <Route path={"/admin"} element={<SignIn/>} exact={true} />
    <Route path={"/adminPage"} element={<SideBar/>} exact={true} />
    <Route path={"/products/aggregates"} element={<Aggregates/>} exact={true}/>
    <Route path={"/projects"} element={<Projects/>} exact={true}/>
    <Route path={"/products/stones"} element={<Stones/>} exact={true}/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  )
}
export default Router