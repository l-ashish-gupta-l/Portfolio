import React, { useEffect, useRef, useState ,} from 'react'
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
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const Personalcard = () => {
  return (
   
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
        display:"none"
      })
      setPersonalvisibilty({
        display:"block"
      })
    } else {
      button.current.style.transform = "translateX(0px)"
      setflag(1);
      console.log("technical skill")
      setvisibilty({
        display:"grid"
      })
      setPersonalvisibilty({
        display: "none"
      })
    }
  }
 
  return (
    <div className='Page' ref={page}>
      <div className="skills">
        <div className="layout-btn">
          <h1 className='label'><u>Technology Stack</u></h1>
          <div className="switch" onClick={btnCheck}>
            <div className='switch-btn' ref={button} >
            </div>
          </div><h1 className='label'><u>Personal Skills</u></h1>
        </div>
        <div className="skills-logo" style={Techvisibilty}>
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
        <h1 className='skill-heading' style={Techvisibilty}><u>{constant[index].title}</u> </h1>
        <p className='skill-para' style={Techvisibilty}>{constant[index].para}</p>
         
        <div className='persnal-stack' style={Personalvisibilty} >
          <Personalcard/>
        </div>



      </div>
    </div>
  )
}

export default Skills