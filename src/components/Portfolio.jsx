import React, { useEffect, useRef } from 'react'
import './Style.css'
import './Media.css'
import gsap from 'gsap'
import Risingnature from "../assest/Risingnature.png"
import Usability from "../assest/usabilty hub.png"
import Portfolioclone from "../assest/paperportfolio.png"

import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Portfolio = () => {
    const page = useRef(null)
    useEffect(() => {
        let el = page.current
        gsap.to(el, {
            opacity: 1,
            duration: 2,
            delay: 0.5,
            scrollTrigger: {
                trigger: el,
                // markers: true,
                start: "top center",
                end: "bottom center"
            }
        })
    }, [])




    return (
        <div className='Page' ref={page} id='Portfolio'>
            <h3 className='heading-portfolio'><u>RECENT</u>     <u> WORK</u></h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
            <div className='work-div1'>
                <h1 className='heading-work' > <a href="https://risingnature.in/" target="_blank">RISING NATURE</a></h1>
                <div className="project-img">
                    <a href="https://risingnature.in/" target="_blank"><img src={Risingnature}  /></a>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
            <div className='work-div3'>
                <h1 className='heading-work' ><a href="https://ashish-paperport.netlify.app/" target="_blank">PORTFOLIO CLONE</a></h1>
                <div className="project-img">
                    <a href="https://ashish-paperport.netlify.app/" target="_blank"><img src={Portfolioclone} /></a>
                </div>
                </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
            <div className='work-div2'>
                <h1 className='heading-work' ><a href="https://ashish-usabilityhub.netlify.app/" target="_blank">USABILITY HUB </a></h1>
                <div className="project-img">
                    <a href="https://ashish-usabilityhub.netlify.app/" target="_blank"><img src={Usability} /></a>
                </div>
            </div>    
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
        </div>
    )
}

export default Portfolio