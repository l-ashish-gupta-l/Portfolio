import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import gsap from 'gsap';
import { Tween } from 'gsap/gsap-core';


const Navbar = () => {

    const [cTime, setCtime] = useState(new Date().toLocaleTimeString());
    let Nav = useRef(null);

    const updatedTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        setCtime(currentTime);
    };
    
    let svg = useRef(null)

    useEffect(() => {
        setInterval(updatedTime, 1000);
        gsap.to(Nav, {
            delay : 1 , 
            duration: 2,
            opacity: 1,
            stagger: 0.5
        })
        gsap.to(svg, {
            delay : 1 ,
            opacity: 1,
            duration: 2,
        })



    }, []);
    return (
        <>
            <div className='Navbar' ref={el => { Nav = el }}>
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
            <svg className="svg" ref={(e) => { svg = e }} xmlns="http://www.w3.org/2000/svg" width="100%" height="15" viewBox="0 0 1350 12" fill="none">
                <path d="M1340 7L1350 11.7735V0.226497L1340 5V7ZM0 7L1341 7V5L0 5L0 7Z" fill="#FFF4F4" />
            </svg>
        </>
    )
}

export default Navbar
