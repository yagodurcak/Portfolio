import "./footer.css"

import {BsGithub} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import React from 'react'

function Footer() {
  return (
    <section id='footer'>
      <div className='footer__container'>
        <h1>MAURICIO DURCAK</h1>
     
          <div className='navmenu__container'>
            <a href="#" className="enlaces">Home</a>
            <a href="#about" className="enlaces">About</a>
            <a href="#experience" className="enlaces">Experience</a>
            <a href="#services" className="enlaces">Services</a>
            <a href="#contact" className="enlaces">Portfolio</a>
            <a href="#testimonials" className="enlaces">Testimonials</a>
          </div>
          <div className='icons__container'>
            <a href="https://www.instagram.com/disenadorwebs/" target="blank">
              <BsInstagram className="icon__container"/>
            </a>
            <a href="https://github.com/yagodurcak" target="blank">
              <BsGithub className="icon__container"/>
            </a>
            <a href="https://www.linkedin.com/in/mauricio-durcak-9b35b251" target="blank">
              <BsLinkedin className="icon__container" />
            </a>
          </div>
          {/* <p className="egator">Lorem ipsum dolor sit amet consectetur.</p> */}
      </div>
    </section>
  )
}

export default Footer