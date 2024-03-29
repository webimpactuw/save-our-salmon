"use client";

import React from 'react';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});


// Optionally import SCSS for styling
import './page.module.scss';

// Import your page components
import Juanita from '@/app/murals/Juanita-Creek/JuanitaCreekPage';
import McAleer from '@/app/murals/McAleer-Creek/McAleerCreekPage';
import USGS from '@/app/murals/USGS-Western/USGSCreekPage';

const MainPage = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper: any) => console.log(swiper)}
    >
      <SwiperSlide><Juanita /></SwiperSlide>
      <SwiperSlide><McAleer /></SwiperSlide>
      <SwiperSlide><USGS /></SwiperSlide>
    </Swiper>
  );
};

export default MainPage;
