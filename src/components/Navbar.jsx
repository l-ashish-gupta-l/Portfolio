import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import gsap from 'gsap';
const Navbar = () => {
    let Time = new Date().toLocaleTimeString();

    const [cTime, setcTime] = useState(Time)
    const updatedtime = () => {
        Time = new Date().toLocaleTimeString();
        setcTime(Time);
    }
    setInterval(updatedtime, 1000)
    
    let Navbar = useRef(null)
    
        gsap.to(Navbar, {
            duration: 1,
            opacity: 1,
            y: 100,
          })
   
    return (
        <div className='Navbar' ref={el => { Navbar = el }}>
            <div className="nav-divs" >
                <span className='nav-head'>NAME</span>
                <h3><a href=''>ASHISH   GUPTA</a></h3>
            </div>
            <div className="nav-divs" >
                <span className='nav-head' >TIME</span>
                <h3 className='Time'>{cTime}</h3>
                <p>GMT+0530 (India Standard Time)</p>
            </div>
            <div className="nav-divs" >
                <span className='nav-head' >SITE MAP</span>
                <h3>
                    <a href='/'>HOME    ,  </a>
                    <a href=''>ABOUT     ,  </a><br />
                    <a href=''> EXPERTISE    ,  </a>
                    <a href=''>PORTFOLIO    . </a>
                </h3>
            </div>
            <div className="nav-divs" >
                <span className='nav-head'>CONTACT ME</span>
                <h3>
                    <a href=''>INSTAGRAM  ,  </a>
                    <a href=''>GITHUB   ,  </a><br />
                    <a href=''>TWITTE ,  </a>
                    <a href=''>GMAIL   . </a>
                </h3>
            </div>

        </div>

    )
}

export default Navbar