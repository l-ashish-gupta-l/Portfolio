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
  const ishovered = () => {
    cursor.style.display = "none";
    cursor.style.cursor = "pointer";
  }
  const leavehovered = () => {
    cursor.style.display = "block";
  }

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


  return (<>

    <div className='main'>
      <div className='container'  >
        <div className='cursor' ref={(e) => { cursor = e }}>
        </div>
        <Navbar hover={ishovered} unhover={leavehovered} />
        <Home hover={ishovered} unhover={leavehovered} />
        <Portfolio hover={ishovered} unhover={leavehovered} />
        <About />
        <Skills />
      </div>
      <Footer hover={ishovered} unhover={leavehovered} />
    </div >
  </>
  )
}

export default App