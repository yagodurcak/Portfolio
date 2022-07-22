import "./testimonials.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper';
import React from 'react'
import avatar1 from "./../../assets/avatar1.jpg"
import avatar2 from "./../../assets/avatar2.jpg"
import avatar3 from "./../../assets/avatar3.jpg"
import avatar4 from "./../../assets/avatar4.jpg"

// Import Swiper styles

const tesimonials = [
  {avatar: avatar1,
  names: "Eduardo - Thinkpad",
  review: "Mauricio is a very responsible and collaborative person with the team members. It was a pleasure working with him."
},
  {avatar: avatar2,
  names: "Luis Perez",
  review: "Mauricio is a person who not only helped with the programming of the web but also advised us on the best ways to carry out the different parts. This allowed cost and time savings."
},
  {avatar: avatar3,
  names: "Francisco Garcia",
  review: "Mauricio helped our company Somos-Fin to have a modern and practical design on our website. I respect the times and that is something that we value a lot when hiring programmers"
}
]

function Testimonials() {
  return (

    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
          className="container testimonials__container"
          pagination={{ clickable: true }} modules={[Pagination]} 
          spaceBetween={50}  slidesPerView={1}
      >
        {tesimonials.map(({avatar, names, review}, index)=>{ 
        return(
        <SwiperSlide className="testimonial__card" key={index}>
          <img src={avatar} alt="" />
          <h3>{names}</h3>
          <p className="text-light">{review}</p>
        </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
    
    )
}

export default Testimonials