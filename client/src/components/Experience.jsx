import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import '../styles/experience.css'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small> 
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>PHP</h4>
              <small className="text-light">Basic</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>ReactJS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>NodeJS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Bootstrap</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>MUI</h4>
              <small className="text-light">Experienced</small>
            </article>

          </div>
        </div>
        {/* END OF WEB DEVELOPMENT */}
        <div className="raw">
        <div className="programming__languages">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>C</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>
          </div>
        </div>
        {/* END OF PROGRAMMING LANGUAGES */}
        <div className="experience__databse">
        <h3>Database</h3>
            <div className="experience__content">
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>MongoDB</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <h4>MsSQL</h4>
              <small className="text-light">Intermediate</small>
            </article>
            </div>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default Experience

