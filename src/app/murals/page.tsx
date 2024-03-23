// MuralPage.tsx
import React from 'react';
import MuralHeader from './MuralHeader/MuralHeader';
import MuralHero from './MuralHero/MuralHero'; // Assuming you have a Hero component as well
import MuralCarousel from './MuralCarousel/MuralCarousel';
import MuralMap from './MuralMap/MuralMap';
import MuralFooter from './MuralFooter/MuralFooter';
import styles from './MuralPage.module.scss';

const MuralPage: React.FC = () => {
  return (
    <div className={styles.muralPage}>
      <MuralHeader />
      <MuralHero />
      <MuralCarousel />
      <MuralMap />
      <MuralFooter />
    </div>
  );
};

export default MuralPage;