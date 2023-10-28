import React, { useEffect, useRef, useState } from 'react'
import "./style.css"
import gsap from 'gsap';
import './Media.css'


const Navbar = (props) => {

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
                    <h3 onMouseEnter={props.hover} onMouseLeave={props.unhover}><a href='/'>ASHISH   GUPTA</a></h3>
                </div>
                <div className="nav-divs" >
                    <span className='nav-head' >TIME</span>
                    <h3 className='Time'>{cTime}</h3>
                    <p>GMT+0530 (India Standard Time)</p>
                </div>
                <div className="nav-divs" >
                    <span className='nav-head' >SITE MAP</span>
                    <h3>
                        <a href='/' onMouseEnter={props.hover} onMouseLeave={props.unhover}>HOME    ,  </a>
                        <a href='#About' onMouseEnter={props.hover} onMouseLeave={props.unhover}>ABOUT     ,  </a><br />
                        <a href='#Skills' onMouseEnter={props.hover} onMouseLeave={props.unhover}> EXPERTISE    ,  </a>
                        <a href='#Portfolio' onMouseEnter={props.hover} onMouseLeave={props.unhover}>PORTFOLIO    . </a>
                    </h3>
                </div>
                <div className="nav-divs" >
                    <span className='nav-head'>CONTACT ME</span>
                    <h3>
                        <a onMouseEnter={props.hover} onMouseLeave={props.unhover}  href='https://instagram.com/l_ashish_gupta_l?igshid=NzZlODBkYWE4Ng==' target='_blank'>INSTAGRAM  ,  </a>
                        <a onMouseEnter={props.hover} onMouseLeave={props.unhover} href='https://github.com/l-ashish-gupta-l' target='_blank'>GITHUB   ,  </a><br />
                        <a onMouseEnter={props.hover} onMouseLeave={props.unhover} href='https://twitter.com/Lashish_gupta_l' target='_blank'>X ,  </a>
                        <a onMouseEnter={props.hover} onMouseLeave={props.unhover} href='https://www.linkedin.com/in/ashish-gupta-22a478135/' target='_blank'>LINKEDIN   . </a>
                    </h3>
                </div>
            </div>
            <svg className="svg" ref={(e) => { svg = e }} xmlns="http://www.w3.org/2000/svg" width="100%" height="15" viewBox="0 0 1350 12" fill="none">
                <path d="M1340 7L1350 11.7735V0.226497L1340 5V7ZM0 7L1341 7V5L0 5L0 7Z" fill=" #ADADAD" />
            </svg>
        </>
    )
}

export default Navbar
