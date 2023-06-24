import React from 'react'
import Lms from '../assets/lms.jpg'
import Hardware from '../assets/hardware.jpg'
import Insta from '../assets/insta.jpg'
import Portfo from '../assets/portfolio.png'
import ChatApp from '../assets/chatApp.png'
import Game from '../assets/game.jpg'
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
          <h3>Project Crawlee</h3>
          <p>Under the knowledge of our industry partner "creative hub global" we created Learning Management System for 2nd year software group project in my university</p>
          <a href="https://github.com/RushenSamodya/PrimeX_Crawlee_FrontEnd_1.0" className="btn" target='_blanck'>View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Insta} alt="LMS"/>
          </div>
          <h3>Instagram Clone - MERN Stack Project</h3>
          <p>This clone has all the functionalities such as create profile, create post, 
user login/logout, follow other users and like and comment to posts.React, NodeJS, ExpressJS and MongoDB are the rechnologiea used</p>
          <a href="https://github.com/RanulRathnayake/InstergramClone" className="btn" target='_blanck'>View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Hardware} alt="LMS"/>
          </div>
          <h3>Automated Pill Dispenser</h3>
          <p>That dispenser can provide the relevant oils, medicine pills, and liquids that are mixed with different medicine powders to the patients. We designed this for 1st year hardware group project in my university</p>
          <a href="https://github.com/RanulRathnayake/Hardware_project" className="btn" target='_blanck'>View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Portfo} alt="LMS"/>
          </div>
          <h3>Portfolio Website</h3>
          <p>Through this portfolio website, visitors can download my CV to learn more about my qualifications. They can also view my showcased projects and easily contact me via email, Messenger, or WhatsApp.</p>
          <a href="https://github.com/RanulRathnayake/portfolio_website" className="btn" target='_blanck'>View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ChatApp} alt="LMS"/>
          </div>
          <h3>Chat Application - MERN Stack Project</h3>
          <p>The chat application allows users to send and receive messages in real time, create chat groups or private conversations. It was developed using ReactJS, Node.js and MongoDB</p>
          <a href="https://github.com/RanulRathnayake/chatApplication" className="btn" target='_blanck'>View Project</a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Game} alt="LMS"/>
          </div>
          <h3>PvP Fighting Game</h3>
          <p>The PvP fighting game, developed using JavaScript and HTML, allows two users to engage in a dynamic virtual combat. Both players can moveand attacks to the other player.</p>
          <a href="https://github.com/RanulRathnayake/PvP_Fighting_Game" className="btn" target='_blanck'>View Project</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
