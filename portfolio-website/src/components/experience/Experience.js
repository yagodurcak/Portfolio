import "./experience.css"

import {BsFillPatchCheckFill} from "react-icons/bs"
import React from 'react'

function Experience() {
  return (
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="frontend__container">
            <h3 className="frontend__title">Frontend Development</h3>
            <div className="list__container">
               
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
            </div>

          </div>
          <div className="frontend__container">

            <h3 className="frontend__title">Backend Development</h3>
            <div className="list__container">
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>HTLM</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Experience