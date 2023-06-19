import React from 'react'
import '../styles/footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>Ranul</a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://web.facebook.com/ranul.rathnake" target='_blanck' ><FaFacebookF/></a>
        <a href="https://www.instagram.com/rnul99/"><FiInstagram/></a>
        <a href="https://twitter.com/RnulRathnyake"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>© 2023 Designed & Built by Ranul Rathnayake. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer

