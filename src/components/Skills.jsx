import React, { useEffect, useRef, useState, } from 'react'
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
import './Media.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const Personalcard = (prop) => {
  return (

    <div className="personal-card">
      <h1>{prop.personaltitile}</h1>
      <p>{prop.personalpara}</p>
    </div>



  )
}




const Skills = () => {
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
  let constant = [
    {
      title: "Click icon to see more...",
      para: "",
    },
    {
      title: "JAVASCRIPT",
      para: "I'm a JavaScript wizard, making web pages come to life! I sprinkle magic on the DOM, creating interactive and dynamic web experiences. Let's make the web fun together!",
    },
    {
      title: "REACT",
      para: "React is my paintbrush for creating lively web user interfaces. I turn static websites into dynamic playgrounds that keep users engaged",
    },
    {
      title: "NEXT.JS",
      para: "With Next.js, I'm like a web magician. I bring your site to life and make it lightning fast. The future of web development starts here.",
    },
    {
      title: "GIT",
      para: "Git is my time machine for code. I save and explore the history of projects. It's like a magical safety net for developers.",
    },
    {
      title: "REDUX",
      para: "With Redux, I'm the superhero of state management. I keep your app's data organized and in line. Say goodbye to data chaos!",
    },
    {
      title: "HTML",
      para: "HTML is my building blocks, crafting the skeleton of the web. I speak its language, shaping pages and structures for the world to see.",
    },
    {
      title: "CSS",
      para: "CSS is where I sprinkle style magic. I dress up web pages, making them pretty and captivating. Every site deserves a good fashion sense!",
    },
    {
      title: "NODE.js",
      para: "Node.js is my backstage pass to the server world. I create powerful, fast, and scalable web applications. Server-side magic at your service!",
    },
    {
      title: "TAILWIND CSS",
      para: "Tailwind CSS is my secret ingredient. I cook up stunning web designs effortlessly. No fuss, just pure visual delight!",
    },

  ]
  const [index, setindex] = useState(0)
  const skillClicked = (key) => {
    setindex(key);
  }
  const skillslogo = useRef(null)
  const personalanimation =useRef(null) 
  const [Techvisibilty, setvisibilty] = useState({})
  const [Personalvisibilty, setPersonalvisibilty] = useState({
    display: "none"
  })
  let button = useRef()
  const [flag, setflag] = useState(1)
  const btnCheck = () => {
    if (flag == 1) {
      button.current.style.transform = "translateX(30px)"
      setflag(0);
      setvisibilty({
        display: "none"
      })
      setPersonalvisibilty({
        display: "grid"
      })
      gsap.from(personalanimation.current, {
        opacity: 0,
        duration: 1,
        
     })
    } else {
      button.current.style.transform = "translateX(0px)"
      setflag(1);
      console.log("technical skill")
      setvisibilty({
        display: "grid"
      })
      setPersonalvisibilty({
        display: "none"
      })
      
      gsap.from(skillslogo.current, {
        opacity: 0,
        duration: 1,

      })
    }
  }

  return (
    <div className='Page' ref={page} id="Skills">
      <div className="skills">
        <div className="layout-btn">
          <h1 className='label'><u>Technology Stack</u></h1>
          <div className="switch" onClick={btnCheck}>
            <div className='switch-btn' ref={button} >
            </div>
          </div>
          <h1 className='label' id='personal-skills'><u>Personal Skills</u></h1>
        </div>
        <div className="skills-logo" style={Techvisibilty}  ref={skillslogo}>
          <img src={jsLogo} onClick={() => skillClicked(1)} />
          <img src={reactLogo} onClick={() => skillClicked(2)} />
          <img src={nextLogo} onClick={() => skillClicked(3)} />
          <img src={gitLogo} onClick={() => skillClicked(4)} />
          <img src={reduxLogo} onClick={() => skillClicked(5)} />
          <img src={htmlLogo} onClick={() => skillClicked(6)} />
          <img src={cssLogo} onClick={() => skillClicked(7)} />
          <img src={nodeLogo} onClick={() => skillClicked(8)} />
          <img src={tailwindLogo} onClick={() => skillClicked(9)} />
        </div>
        <h1 className='skill-heading'  style={Techvisibilty}><u>{constant[index].title}</u> </h1>
        <p className='skill-para'  style={Techvisibilty}>{constant[index].para}</p>

        <div className='persnal-stack' ref={personalanimation} style={Personalvisibilty} >
          <Personalcard
            personaltitile="Enhanced Problem Solving"
            personalpara="As a frontend engineer, I excel in problem-solving. I address compatibility and performance challenges with innovative solutions, ensuring user-friendly and visually appealing web experiences. My passion drives my success." />
          <Personalcard
            personaltitile="My Esports Journey"
            personalpara="In my esports journey, I've developed a range of skills beyond gaming. I've learned teamwork, effective communication, and adaptability. These abilities, gained through dedicated practice, have been vital to my success in the competitive gaming world."
          />
            <Personalcard personaltitile="Working Well with Others: Client Interaction Skills"
            personalpara="I am the developer behind Rising Nature's website, where client interactions play a pivotal role in fostering our web platform's growth."
            />
          <Personalcard
            personaltitile="Effective Time Management Skills"
            personalpara="I'm adept at time management. I carefully plan tasks, ensuring efficient use of time and meeting deadlines consistently. This organized approach results in effective and successful task completion, promoting productivity."
          />
          <Personalcard personaltitile="Smart Thinking: Making Wise Choices"
            personalpara="Smart thinking is my forte. I analyze situations diligently, making wise choices. This approach guarantees successful decision-making, productivity, and positive outcomes across various facets of life."
          />
          <Personalcard personaltitile="Always Learning for Growth"
            personalpara="Continuous learning is the practice of gaining knowledge throughout life. It leads to personal growth, improved skills, and staying relevant in a changing world, making you a valuable asset in various contexts."
          />

        </div>



      </div>
    </div>
  )
}

export default Skills