import React from 'react'
import "./Style.css"
const Home = () => {
  return (
      <div className='herosection'>
          <div className="lefthero">
              <h1 className='heroheading'>Transforming Visions into Dynamic
                  <br/> Digital Realities
                  <br /><span className='Herospan'>ASHISH GUPTA </span> , Frontend Engineer</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="309" height="12" viewBox="0 0 309 12" fill="none">
                  <path d="M299 7L309 11.7735L309 0.226497L299 5L299 7ZM-6.05814e-10 7L300 7L300 5L6.05814e-10 5L-6.05814e-10 7Z" fill="#ADADAD" />
              </svg>

              <p className='heropara'>As a front-end developer, my mission is to create interfaces that perfectly align with the desired design, while constructing resilient and user-friendly web applications that are easy to maintain.</p>


              <button className='herobtn'><h2>GET IN TOUCH WITH ME</h2></button>
          <div className="righthero"><p>BASED IN INDIA <br/>
              AVAILABLE FOR FREELANCE PROJECT</p></div>
          </div>

    </div>
  )
}

export default Home