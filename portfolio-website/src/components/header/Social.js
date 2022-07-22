import {BsInstagram} from "react-icons/bs"
import{BsLinkedin} from "react-icons/bs"
import{FaGithub} from "react-icons/fa"
import React from 'react'

function Social() {
  return (
    <div className="header__social">
         <a href="https://www.linkedin.com/in/mauricio-durcak-9b35b251" target="blank"><BsLinkedin/></a>
      <a href="https://github.com/yagodurcak" target="blank"><FaGithub/></a>
      <a href="https://www.instagram.com/disenadorwebs/" target="blank">
              <BsInstagram />
            </a>
    </div>
  )
}

export default Social