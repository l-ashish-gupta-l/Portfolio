import React from 'react'
import "./app.css"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <svg xmlns="http://www.w3.org/2000/svg" width="full" height="15" viewBox="0 0 1350 12" fill="none">
        <path d="M1340 7L1350 11.7735V0.226497L1340 5V7ZM0 7L1341 7V5L0 5L0 7Z" fill="#FFF4F4" />
      </svg>
      <div className='container'>
        <Home />
        <Portfolio />
        <About />
        <Skills />
      </div>
        <Footer/>
    </div>
  )
}

export default App