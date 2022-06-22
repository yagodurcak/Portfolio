import{BsLinkedin} from "react-icons/bs"
import{FaDribbble} from "react-icons/fa"
import{FaGithub} from "react-icons/fa"
import React from 'react'

function Social() {
  return (
    <div className="header__social">
         <a href="https://linkedin.com" target="blank"><BsLinkedin/></a>
      <a href="https://github.com" target="blank"><FaGithub/></a>
      <a href="https://dribble.com" target="blank"><FaDribbble/></a>
    </div>
  )
}

export default Social