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
  names: "Marcos",
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sit nesciunt repellat id? Minima reprehenderit doloribus, amet expedita temporibus harum?"
},
  {avatar: avatar2,
  names: "Marcos",
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sit nesciunt repellat id? Minima reprehenderit doloribus, amet expedita temporibus harum?"
},
  {avatar: avatar3,
  names: "Marcos",
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sit nesciunt repellat id? Minima reprehenderit doloribus, amet expedita temporibus harum?"
},
  {avatar: avatar4,
  names: "Marcos",
  review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sit nesciunt repellat id? Minima reprehenderit doloribus, amet expedita temporibus harum?"
},
]

function Testimonials() {
  return (

    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
          className="container testimonials__container"
          pagination={true} modules={[Pagination]} 
          spaceBetween={50}
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