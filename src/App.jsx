import React from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Process from './component/Process'
import About from './component/About'
import Portfolio from './component/Portfolio'
import Skill from './component/Skill'
import Service from './component/Services'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <Home/>
    <Process/>
    <About/>
    <Portfolio/>
     <Service/>
    <Skill/>
   
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
