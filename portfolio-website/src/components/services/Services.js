import "./services.css"

import {BiCheck} from "react-icons/bi"
import React from 'react'

function Services() {
  return (
<section id="services">  
    <h5 >What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <div className="services__box">
        <div className="services__head">
          <h3>WEB PAGES</h3>
        </div>
        <ul className="services__content">
          <li>
            {/* <BiCheck className="services__icon" /> */}
            <p> If you want a page in internet for your blog, business or landing page so people can know it and get information. I help you to design a page as you desire, page 100% responsive so it can be visualize very well both in phones and computers.</p>
          </li>
          {/* <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li> */}
        </ul>
      </div>
      <div className="services__box">
        <div className="services__head">
          <h3>WEB APLICATIONS</h3>
        </div>
        <ul className="services__content">
          <li>
            {/* <BiCheck className="services__icon"/> */}
            <p>Are you looking for a tool to get more control of your business? Do you want to start to get a register of your business information in a database? Contact me and I'll help you to create the tool that you need..</p>
          </li>
          {/* <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li> */}
        </ul>
      </div>
      <div className="services__box">
        <div className="services__head">
          <h3>MOVILE DEVELOPMENT</h3>
        </div>
        <ul className="services__content">
          <li>
            {/* <BiCheck className="services__icon"/> */}
            <p>Mobile application development with react native or flutter, connection to device hardware, from simple applications to highly complex applications.</p>
          </li>
          {/* <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <BiCheck className="services__icon"/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </li> */}
        </ul>
      </div>
    </div>
</section>  )
}

export default Services