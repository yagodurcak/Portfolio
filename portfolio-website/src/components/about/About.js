import "./about.css"

import {FaAward} from "react-icons/fa"
import ME from "../../assets/ABOUT2.png"
import React from 'react'

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
       <div className="container about__container">
         <div className="about__me">
          <img className="about__me-image"src={ME} alt="" />
         </div>
         <div className="about__content">

          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__card-icon"/>
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__card-icon"/>
              <h5>CLients</h5>
              <small> 50 + Worldwide</small>
            </article>
            <article className="about__card">
              <FaAward className="about__card-icon"/>
              <h5>Projects</h5>
              <small> 30+ Completed</small>
            </article>
  
          </div>
            <p>There is no better way to learn than to practice... thanks to developing projects that are used in real life, one prepares for future work challenges. Then, when working with clients, different challenges are presented that affirm and increase the knowledge in the previously practiced tools.</p>
            <a href="#contact" className="btn btn-primary">Let´s Talk</a>
          
         </div>
       </div> 
    </section>
  )
}

export default About