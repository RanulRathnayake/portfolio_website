import React from 'react'
import CTA from './CTA'
import Prof from '../assets/Profile.png'
import HeaderSocials from './HeaderSocials'
import "../styles/header.css"

function Header() {
  return (
    <div>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Ranul Rathnayake</h1>
          <h5 className='text-light'>Full Stack Developer</h5>
          <CTA />
          <div className="me">
            <img src={Prof} alt="" />
          </div>
          <a href="#contact" className="scroll_down">Scroll Down</a>
          <HeaderSocials />
        </div>
      </header>
    </div>
  )
}

export default Header
