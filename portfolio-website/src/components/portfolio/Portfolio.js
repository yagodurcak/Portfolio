import "./portfolio.css"

import React from 'react'
import portfolio1 from "./../../assets/portfolio1.jpg"
import portfolio2 from "./../../assets/portfolio2.jpg"
import portfolio3 from "./../../assets/portfolio3.jpg"
import portfolio4 from "./../../assets/portfolio4.jpg"
import portfolio5 from "./../../assets/portfolio5.png"
import portfolio6 from "./../../assets/portfolio6.jpg"

function Portfolio() {
  return (
<section id="portfolio">
    <h5 >My recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__conrtainer">
      <div className="portfolio__card">
        <img src={portfolio1} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary">Github</a>
          <a className="btn">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio2} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary">Github</a>
          <a className="btn">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio3} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary">Github</a>
          <a className="btn">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio4} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary">Github</a>
          <a className="btn">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio5} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary">Github</a>
          <a className="btn">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio6} alt="" />
        <h3>Lorem ipsum dolor sit amet consectetur.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary">Github</a>
          <a className="btn">Live a Demo</a>
        </div>
      </div>
    </div>
</section>    


)
}

export default Portfolio