import "./portfolio.css"

import React from 'react'
import portfolio1 from "./../../assets/portfolio1.jpg"
import portfolio2 from "./../../assets/download.png"
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
        <h3>Cryptocurrency Quoter.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary" href="https://github.com/yagodurcak/criptomonedas" target="_blank">Github</a>
          <a className="btn" href="https://happy-wilson-874488.netlify.app/" target="_blank">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio2} alt="" />
        <h3>Travel Advisor.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary" href="https://github.com/yagodurcak/travelAdvisor" target="_blank">Github</a>
          <a className="btn" href="https://travel-advisor-maps.netlify.app/" target="_blank">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio3} alt="" />
        <h3>Weather.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary" href="https://github.com/yagodurcak/Clima" target="_blank">Github</a>
          <a className="btn" href="https://unruffled-kilby-fe9e53.netlify.app/" target="_blank">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio4} alt="" />
        <h3>Free Stock Photography.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary" href="https://github.com/yagodurcak/bancoimagenes" target="_blank">Github</a>
          <a className="btn" href="https://priceless-keller-03c6ad.netlify.app/" target="_blank">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio5} alt="" />
        <h3>Date Appointment.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary" href="https://github.com/yagodurcak/bancoimagenes" target="_blank">Github</a>
          <a className="btn" href="https://hardcore-wescoff-5753df.netlify.app/" target="_blank">Live a Demo</a>
        </div>
      </div>
      <div className="portfolio__card">
        <img src={portfolio6} alt="" />
        <h3>Pizza Hot.</h3>
        <div className="portfolio__btns">
          <a  className="btn btn-primary" href="https://github.com/yagodurcak/PizzaOrder" target="_blank">Github</a>
          <a className="btn" href="https://github.com/yagodurcak/bancoimagenes" target="_blank">Live a Demo</a>
        </div>
      </div>
    </div>
</section>    


)
}

export default Portfolio