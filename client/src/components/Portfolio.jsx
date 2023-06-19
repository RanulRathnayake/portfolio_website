import React from 'react'
import Lms from '../assets/lms.jpg'
import Hardware from '../assets/hardware.jpg'
import '../styles/portfolio.css'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Lms} alt="LMS"/>
          </div>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="https://github.com/" className="btn">View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Hardware} alt="LMS"/>
          </div>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="https://github.com/" className="btn">View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Hardware} alt="LMS"/>
          </div>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="https://github.com/" className="btn">View Project</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
