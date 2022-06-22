import "./nav.css"

import React, {useState} from 'react'

import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BiMessageSquareDetail} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"

function Nav() {

  const [activo, setActivo] = useState("#");


  return (
    <nav>
      <a href="#" onClick={()=> setActivo("#")} className={activo === "#" ? "active" : "" }><AiOutlineHome/></a>
      <a href="#about" onClick={()=> setActivo("#about")} className={activo === "#about" ? "active" : "" } ><AiOutlineUser/></a>
      <a href="#experience"  onClick={()=> setActivo("#experience")} className={activo === "#experience" ? "active" : "" }><BiBook/></a>
      <a href="#services"  onClick={()=> setActivo("#services")} className={activo === "#services" ? "active" : "" }><RiServiceLine/></a>
      <a href="#contact"  onClick={()=> setActivo("#contact")} className={activo === "#contact" ? "active" : "" }><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav