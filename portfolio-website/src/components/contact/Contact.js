import "./contact.css"

import {AiOutlineMail} from "react-icons/ai"
import React from 'react'

function Contact() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="cards__container">
          <div className="card__container">
           
            <AiOutlineMail className="card__icon"/>
            <h5>Email</h5>
            <small>support@gmail.com</small>
            <a>Send a message</a>
          </div>
          <div className="card__container">
           
            <AiOutlineMail className="card__icon"/>
            <h5>Email</h5>
            <small>support@gmail.com</small>
            <a>Send a message</a>
          </div>
          <div className="card__container">
           
            <AiOutlineMail className="card__icon"/>
            <h5>Email</h5>
            <small>support@gmail.com</small>
            <a>Send a message</a>
          </div>
        </div>
        <div className="form__container">
          <form action="" className="form__card">
            <input type="text" placeholder="Your Full Name" />
            <input type="email" placeholder="Your Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <a href="" className="btn btn-primary">Send Message</a>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact