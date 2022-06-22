import "./about.css"

import {FaAward} from "react-icons/fa"
import ME from "../../assets/me-about.jpg"
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
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__card-icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaAward className="about__card-icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
  
          </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ratione, ab aliquam velit repellat temporibus modi nulla autem excepturi fuga quibusdam cum, eius quo! Expedita aut quaerat voluptates eligendi cupiditate.</p>
            <addEventListener className="btn btn-primary">Let´s Talk</addEventListener>
          
         </div>
       </div> 
    </section>
  )
}

export default About