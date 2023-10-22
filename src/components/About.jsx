import React from 'react'
import "./Style.css"
const About = () => {
  return (
    <div className='Page'>
      <div className="about-div">
        <h1 className='about-heading'>about.</h1>
        <h2 className='about-subheading'>I am a Frontend Engineer <br /> based  in Uttar Pradesh, India.</h2>
        <svg xmlns="http://www.w3.org/2000/svg" width="38%" height="12" viewBox="0 0 702 12" fill="none">
          <path d="M692 7L702 11.7735L702 0.226497L692 5L692 7ZM0 7L693 7L693 5L0 5L0 7Z" fill="#ADADAD" />
        </svg>
        <p className='about-text'>I specialize in creating dynamic websites and captivating animations, merging technical expertise with artistic flair. My passion is crafting user-friendly, creatively engaging online experiences, leaving a lasting impact in every project.</p>
      </div>
    </div>
  )
}

export default About 