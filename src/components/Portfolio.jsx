import React, { useEffect, useRef } from 'react'
import './Style.css'
import gsap from 'gsap'
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
        <div className='Page' ref={page}>
            <h3 className='heading-portfolio'><u>RECENT</u>     <u> WORK</u></h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
            <div className='work-div'>
                <h1 className='heading-work' >RISING NATURE</h1>
                <div className="project-img">sd</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
            <div className='work-div'>
                <h1 className='heading-work' >RISING NATURE</h1>
                <div className="project-img">sd</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
            <div className='work-div'>
                <h1 className='heading-work' >RISING NATURE</h1>
                <div className="project-img">sd</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1287 13" fill="none">
                <path d="M1276.99 7.26023L1287 12.0319L1286.99 0.484855L1276.99 5.26023L1276.99 7.26023ZM6.5687e-05 7.5L1277.99 7.26005L1277.99 5.26005L-0.000309828 5.5L6.5687e-05 7.5Z" fill="#ADADAD" />
            </svg>
        </div>
    )
}

export default Portfolio