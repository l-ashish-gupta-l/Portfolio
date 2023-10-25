import React, { useEffect, useRef, useState } from 'react'
import "./app.css"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { gsap } from "gsap";

const App = () => {

  const [mouse, setmouse] = useState({
    x: null,
    y: null
  })

  useEffect(() => {
    const mousemove = (e) => {
      setmouse({
        x: e.clientX,
        y: e.clientY,
        
      })
    }
    window.addEventListener('mousemove', mousemove);
  }, [])
  
  let cursor = useRef(null)
  useEffect(() => {
    gsap.to(cursor, {
      x: `${mouse.x}px`,
      y: `${mouse.y}px`,
      scale: 2
    })
  })

  const tl = gsap.timeline()


  return (
    <div className='main'>
      <div className='container'>
        <Navbar />
        <div className='cursor' ref={(e)=>{cursor = e}}>
        </div>
        <Home />
        <Portfolio />
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  )
}

export default App