import React from 'react'
import AboutMe from './Components/AboutMe'

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Project from './Components/Project'
import Skills from './Components/Skills'



const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
     <AboutMe/>
     <Skills/>
     <Project/>
     <Contact/>
     
    </div>
  )
}

export default App
