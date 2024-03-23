import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Optionally import SCSS for styling
import './page.module.scss';

// Import your page components
import Juanita from './Juanita-Creek/JuanitaCreekPage';
import McAleer from './McAleer-Creek/McAleerCreekPage';
import USGS from './USGS-Western/USGSCreekPage';

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
