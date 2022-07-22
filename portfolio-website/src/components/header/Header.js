import './header.css'

import CAT from "./CAT"
import YO from "../../assets/yo.png"
import Social from "./Social"

function Header() {
  return (
    <header >

      <div className='container header__container'>
        <h5>Hello I´m</h5>
        <h1>Mauricio Durcak</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CAT/>
             <Social/>
        <div className='me'><img src={YO} alt="" /></div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> 

    </header>
  )
}

export default Header