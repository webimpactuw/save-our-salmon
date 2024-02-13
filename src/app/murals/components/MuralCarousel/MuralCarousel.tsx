import React, { useState } from 'react';
import styles from './MuralCarousel.module.scss';

const murals: string | any[] = [
  // mural images will be placed here, do in the future
  
];

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

function MuralCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // scrolling to the previous page in the carousel
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? murals.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  
  // scrolling to the next page in the carousel
  const goToNext = () => {
    const isLastImage = currentIndex === murals.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // styling for the carousel, including the buttons
  return (
    <div className={"carousel"}>
      <button className={styles.prev} onClick={goToPrevious}>&lt;</button>
      <img src={murals[currentIndex]} alt={`Mural ${currentIndex + 1}`} className={styles.image}/>
      <button className={styles.next} onClick={goToNext}>&gt;</button>
    </div>
  );
}

export default MuralCarousel;