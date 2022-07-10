import "./contact.css"

import {AiOutlineMail} from "react-icons/ai"
import React from 'react'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_36g16e8', 'template_6wn406f', form.current, 'kH8ZRFQ522hPVZFpE')


    e.target.reset()
  };

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
          <form ref={form} className="form__card" onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Full Name" />
            <input type="email" name="email" placeholder="Your Email" />
            <textarea name="message" id="" cols="30" rows="10"  placeholder="Your Message"></textarea>
            <button href="" className="btn btn-primary"type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact