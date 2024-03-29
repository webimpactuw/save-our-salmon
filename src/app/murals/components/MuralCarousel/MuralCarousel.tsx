"use client";
import React, { useState } from 'react';
import JuanitaImg from './Juanita-mural.jpg';
import McAleerImg from './LFP-McAleer-mural.png';
import USGCWesternImg from './USGS-Mural-Magnuson-Park-Seattle.jpg';
import styles from './MuralCarousel.module.scss';

// images for the mural carousel
const images: string[] = [
  './Juanita-mural.jpg',
  './LFP-McAleer-mural.png',
  './USGS-Mural-Magnuson-Park-Seattle.jpg'
];
/* 
const paths: string[] = 
['../../../../public/Mural - Juanita/Juanita-mural.jpg', 
'../../../../public/Mural - McAleer/LFP-McAleer-mural.png', 
'../../../../public/Mural - USGS/USGS-Mural-Magnuson-Park-Seattle.jpg']
*/

function MuralCarousel() {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="carousel">
      <button onClick={prevSlide}>Prev</button>
      {images.map((imageSrc, index) => (
  <div key={index} className="carousel-slide">
    <img src={imageSrc} alt={`Image ${index}`} />
  </div>
))}
      <button onClick={nextSlide}>Next</button>
    </section>
  );
}

export default MuralCarousel;