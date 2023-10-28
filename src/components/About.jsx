import React, { useEffect, useRef } from 'react'
import "./Style.css"
import './Media.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

import { TypeAnimation } from 'react-type-animation';
const About = () => {
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
    <div className='Page' ref={page} id='About'>
      <div className="about-div">
        {/* <h1 className='about-heading'>about.</h1> */}
        <TypeAnimation
          sequence={[
            'about.',
            2000,
            'Who I Am!',
            2000,
            'Get to Know Me?',
            2000

          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '9em', display: 'inline-block', marginBottom: '20px' }}
          repeat={Infinity}
          className='about-dynamic-text'
        />
        <h2 className='about-subheading'>I am a Frontend Engineer <br /> based  India.</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="38%" height="12" viewBox="0 0 702 12" fill="none">
          <path d="M692 7L702 11.7735L702 0.226497L692 5L692 7ZM0 7L693 7L693 5L0 5L0 7Z" fill="#ADADAD" />
        </svg>
        <p className='about-text'>I specialize in creating dynamic websites and captivating animations, merging technical expertise with artistic flair. My passion is crafting user-friendly, creatively engaging online experiences, leaving a lasting impact in every project.</p>
      </div>
    </div>
  )
}

export default About 