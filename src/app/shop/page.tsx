
"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function CarouselComp() {
  return (
    <>
      <div className='max-w-[600px] mx-auto'>
        <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
            <div>
                <img src="https://picsum.photos/id/1018/1000/600/" alt="Banner image" width={1200} height={300}/>
            </div>
            <div>
                <img src="https://picsum.photos/id/1015/1000/600/" alt="Banner image"  width={1200} height={300}/>
            </div>
            <div>
                <img src="https://picsum.photos/id/1019/1000/600/"  alt="Banner image" width={1200} height={300} />
            </div>
        </Carousel>
      </div>
    </>
  );
};