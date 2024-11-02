import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../home/BannerCard.css'

// import required modules
import { EffectCards } from 'swiper/modules';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


export default function BannerCard() {
  return (
    <div className='banner'>
         <Swiper
         autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  )
}


