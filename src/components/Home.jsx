import React, { useEffect, useRef } from 'react'
import "./Style.css"
import './Media.css'
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
    let Hero = useRef(null)

    useEffect(() => {
        gsap.to(Hero.current, {

            delay: 1,
            opacity: 1,

        })
    }, [])

    return (
        <div className='herosection' ref={Hero}>
            <div className="lefthero">
                <h1 className='heroheading'>Transforming Visions into Dynamic
                    <br /> Digital Realities
                </h1>
                <TypeAnimation
                    sequence={[
                        'ASHISH GUPTA , FRONTEND ENGINEER.',
                        2000,
                        'ASHISH GUPTA , DEVELOPER.',
                        2000,
                        'ASHISH GUPTA , DESIGNER.', ,
                        2000,

                    ]}
                    wrapper="h1"
                    speed={50}
                    style={{ fontSize: '4em', display: 'inline-block', marginTop: '-30px' }}
                    repeat={Infinity}
                    className='dynamic-hero-text'
                />
                <svg xmlns="http://www.w3.org/2000/svg" width="38%" height="15" viewBox="0 0 702 12" fill="none">
                    <path d="M692 7L702 11.7735L702 0.226497L692 5L692 7ZM0 7L693 7L693 5L0 5L0 7Z" fill="#ADADAD" />
                </svg>
                <p className='heropara'>As a front-end developer, my mission is to create interfaces that perfectly align with the desired design, while constructing resilient and user-friendly web applications that are easy to maintain.</p>


                <h1 ><a className='herobtn' href='#Footer'>GET IN TOUCH WITH ME</a></h1>
                <div className="righthero"><p>BASED IN INDIA <br />
                    AVAILABLE FOR FREELANCE PROJECT</p></div>
            </div>

        </div>
    )
}

export default Home