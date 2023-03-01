import React from 'react'
import AboutMe from './Components/AboutMe'

import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

import Skills from './Components/Skills'
import Footer from './Components/Footer'
import GithubTasks from './Components/GithubTasks'
import Tools from "./Components/Tools"
import GridBlurredBackdrop from './Components/Projects'




const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />

      <Skills />
      <Tools/>
      <GridBlurredBackdrop />
      <GithubTasks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
