import CV from "../../assets/cv.pdf"
import React from 'react'

function CAT() {
    return (
        <div className="header__cat">
            <a href={CV} download className="btn">Download CV</a>
            <a href="#contact" className="btn btn-primary">Let´s Talk</a>
        </div>
    )
}

export default CAT