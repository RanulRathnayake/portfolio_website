import React from 'react'
import Me from '../assets/Me.png'
import {FaUniversity} from 'react-icons/fa'
import {FaAward} from 'react-icons/fa'
import '../styles/about.css'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About_image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>University Of Moratuwa</h5>
              <small>Undergraduate</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </div>
          <p className='para'>A self-learned, passionate individual, currently a third-year undergraduate in BSc. (Hons) in information technology University of Moratuwa . My objective is to work for an organization which provide the opportunity to improve my knowledge, skills and gain more experience while growing along with the organizational objectives and taking the organization to excellence.</p>

          <a href="#contact" className="btn btn-primary">Contact Me</a>

        </div>
      </div>
    </section>
  )
}

export default About

