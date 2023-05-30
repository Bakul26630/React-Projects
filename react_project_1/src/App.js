import React from "react";
import './App.css';
import { Routes,Route,Navigate } from "react-router-dom";
import About from "./NavbarComponents/About";
import Contact from "./NavbarComponents/Contact";
import Home from "./NavbarComponents/Home";
import Service from "./NavbarComponents/Service";
import Footer from "./Static/Footer";

import Navbar from "./Navbar";
const App = ()=>{
  return(<>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="contact" element={<Contact/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="service" element={<Service/>}/>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>
  <Footer/>
  </>);
}

export default App;