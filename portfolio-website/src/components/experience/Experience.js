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
                    <h4>CSS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>JAVASCRIPT</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>REACTJS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
            </div>

          </div>
          <div className="frontend__container">

            <h3 className="frontend__title">Frontend Development</h3>
            <div className="list__container">
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>REACT NATIVE</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>BOOTSTRAP</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>MATERIALJS</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>ANGULAR</h4>
                    <small className="text-light">INTERMEDIATE</small>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Experience