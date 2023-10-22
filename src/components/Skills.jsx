import React, { useRef, useState } from 'react'
import './Style.css'
import reactLogo from '../assest/React.svg'
import htmlLogo from '../assest/html.svg'
import cssLogo from '../assest/css.svg'
import jsLogo from '../assest/Js.svg'
import nextLogo from '../assest/Next.svg'
import tailwindLogo from '../assest/tailwind.svg'
import nodeLogo from '../assest/node.svg'
import gitLogo from '../assest/git.svg'
import reduxLogo from '../assest/redux.svg'






const Skills = () => {
  let button = useRef()
  let flag = 1;
  const btnCheck = () => {
    if (flag == 1) {
      button.current.style.transform = "translateX(30px)"
      flag = 0;
    } else {
      button.current.style.transform = "translateX(0px)"
      flag = 1;
    }
  }
  return (
    <div className='Page'>
      <div className="skills">
        <div className="layout-btn">
          <h1 className='label'><u>Technology Stack</u></h1>
          <div className="switch" onClick={btnCheck}>
            <div className='switch-btn' ref={button} >

            </div>
          </div><h1 className='label'><u>Personal Skills</u></h1>
          
        </div>
        <div className="skills-logo">
          <img src={jsLogo} />
          <img src={reactLogo} />
          <img src={nextLogo} />
          <img src={gitLogo} />
          <img src={reduxLogo} />
          <img src={htmlLogo} />
          <img src={cssLogo} />
          <img src={nodeLogo} />
          <img src={tailwindLogo} />
        </div>


      </div>
    </div>
  )
}

export default Skills