import "./footer.css"

import {FaFacebookF} from "react-icons/fa"
import React from 'react'

function Footer() {
  return (
    <section id='footer'>
      <div className='footer__container'>
        <h1>MAURICIO DURCAK</h1>
     
          <div className='navmenu__container'>
            <a href="" className="enlaces">Home</a>
            <a href="" className="enlaces">About</a>
            <a href="" className="enlaces">Experience</a>
            <a href="" className="enlaces">Services</a>
            <a href="" className="enlaces">Portfolio</a>
            <a href="" className="enlaces">Testimonials</a>
          </div>
          <div className='icons__container'>
            <FaFacebookF className="icon__container"/>
            <FaFacebookF className="icon__container"/>
            <FaFacebookF className="icon__container"/>
          </div>
          <p className="egator">Lorem ipsum dolor sit amet consectetur.</p>
      </div>
    </section>
  )
}

export default Footer