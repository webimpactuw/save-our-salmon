"use client";

import React from 'react';

// Optionally import SCSS for styling
import './page.module.scss';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import your page components
import Juanita from '@/app/murals/Juanita-Creek/JuanitaCreekPage';
import McAleer from '@/app/murals/McAleer-Creek/McAleerCreekPage';
import USGS from '@/app/murals/USGS-Western/USGSCreekPage';

const MainPage = () => {
  return (
    <>
      <div className='max-w-[600px] mx-auto'>
        <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
            <div>
                <Juanita/>
            </div>
            <div>
                {/* <McAleer/> */}2
            </div>
            <div>
                {/* <USGS /> */}3
            </div>
        </Carousel>
      </div>
    </>
  );
};

export default MainPage;
