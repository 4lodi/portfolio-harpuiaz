import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
  {
    id:1,
    image:AVTR1,
    name:'avatar1',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et distinctio error temporibus fuga nihil iste aliquam. Quas explicabo id officia placeat aliquam ipsum perspiciatis rem, eum facere ullam optio.',
  },
  {
    id:2,
    image:AVTR2,
    name:'avatar2',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et distinctio error temporibus fuga nihil iste aliquam. Quas explicabo id officia placeat aliquam ipsum perspiciatis rem, eum facere ullam optio.',
  },
  {
    id:3,
    image:AVTR3,
    name:'avatar3',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et distinctio error temporibus fuga nihil iste aliquam. Quas explicabo id officia placeat aliquam ipsum perspiciatis rem, eum facere ullam optio.',
  },
  {
    id:4,
    image:AVTR4,
    name:'avatar4',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae et distinctio error temporibus fuga nihil iste aliquam. Quas explicabo id officia placeat aliquam ipsum perspiciatis rem, eum facere ullam optio.',
  },
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={{clickable:true}} modules={[Pagination]} slidesPerView={1} spaceBetween={40} className="container testimonial__container" >
        {
          data.map(({id,image,name,review}) => {
            return(
              <SwiperSlide key={id} className='testimonial'>
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'> 
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
  )
}

export default Testimonial