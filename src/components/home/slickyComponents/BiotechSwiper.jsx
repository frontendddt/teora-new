import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './BiotechSwiper.css';

export default function BiotechSwiper() {
  return (
    <div className="swiper-wrapper-container">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={20}
        loop={false}  
        pagination={{ clickable: true }}
        navigation={false}
        grabCursor={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={`https://via.placeholder.com/400x200?text=Slide+${index + 1}`} alt={`Slide ${index + 1}`} />
              <h3>Slide Title {index + 1}</h3>
              <p>Short description for slide
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident autem veritatis iure sequi assumenda, cum, sint officiis excepturi et voluptates cupiditate deleniti dicta atque minus. Magnam tempora harum eligendi.
              {index + 1}.</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
