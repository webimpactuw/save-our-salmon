"use client";
import React, { useState } from 'react';
import JuanitaImg from './Juanita-mural.jpg';
import McAleerImg from './LFP-McAleer-mural.png';
import USGCWesternImg from './USGS-Mural-Magnuson-Park-Seattle.jpg';
import styles from './MuralCarousel.module.scss';
import Image from 'next/image';

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// images for the mural carousel
const images: string[] = [
  '/Mural - Juanita/Juanita-mural.jpg',
  '/Mural - McAleer/LFP-McAleer-mural.png',
  '/Mural - USGS/USGS-Mural-Magnuson-Park-Seattle.jpg'
];
/* 
const paths: string[] = 
['../../../../public/Mural - Juanita/Juanita-mural.jpg', 
'../../../../public/Mural - McAleer/LFP-McAleer-mural.png', 
'../../../../public/Mural - USGS/USGS-Mural-Magnuson-Park-Seattle.jpg']
*/

function MuralCarousel() {
  return (
    <div>
      <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
          <div>
            <Image src={images[0]} alt="Image" width={300} height={100}></Image>
          </div>
          <div>
          <Image src={images[1]} alt="Image" width={300} height={100}></Image>
          </div>
          <div>
            <Image src={images[2]} alt="Image" width={300} height={100}></Image>
          </div>
      </Carousel>
    </div>
  );
//   const [current, setCurrent] = useState(0);
//   const length = images.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   return (
//     <section className="carousel">
//       <button onClick={prevSlide}>Prev</button>
//       {images.map((imageSrc, index) => (
//   <div key={index} className="carousel-slide">
//     <img src={imageSrc} alt={`Image ${index}`} />
//   </div>
// ))}
//       <button onClick={nextSlide}>Next</button>
//     </section>
//   );
// }

}

export default MuralCarousel;