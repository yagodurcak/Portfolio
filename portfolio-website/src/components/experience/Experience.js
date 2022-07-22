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
                    <h4>TAILWIND</h4>
                    <small className="text-light">INTERMEDIATE</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>ANGULAR</h4>
                    <small className="text-light">INTERMEDIATE</small>
                  </div>
                </div>
                <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>FLUTTER</h4>
                    <small className="text-light">INTERMEDIATE</small>
                  </div>
                </div>
            </div>

          </div>
          <div className="frontend__container">

            <h3 className="frontend__title">Other Knowledge</h3>
            <div className="list__container">
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Bachelor of Business Administration</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Master of Business Administration</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Project Manager</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Good spoken and written English</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>knowledge in AI</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>knowledge in Python</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Agile Methods</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Github</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Understanding of UI/UX process</h4>
                  </div>
                </div>
            <div className="boxlist__container">
                  <BsFillPatchCheckFill className="boxlist__icon"/>
                  <div className="boxlist__txt">
                    <h4>Knowledge of wireframe tools </h4>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>  )
}

export default Experience