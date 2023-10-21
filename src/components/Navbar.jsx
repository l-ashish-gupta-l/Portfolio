import React from 'react'
import "./style.css"
const Navbar = () => {
  return (
      <div className='Navbar'>
          <h2><a href="/">ASHISH</a></h2>
          <ul className='sitemap'>
              <li><h2><a href="#about">HOME</a></h2></li>
              <li><h2><a href="#about">ABOUT</a></h2></li>
              <li><h2><a href="#about">PORTFOLIO</a></h2></li>
          </ul>
          <h2><a href="/">CONTACT US</a></h2>
    </div>
          
  )
}

export default Navbar