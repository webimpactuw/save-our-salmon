import React from 'react';
import styles from './page.module.scss';

import MuralHeader from '../components/MuralHeader/MuralHeader'; // Adjust path
import MuralHero from '../components/MuralHero/MuralHero'; // Adjust path
import MuralCarousel from '../components/MuralCarousel/MuralCarousel'; // Adjust path
import MuralMap from '../components/MuralMap/MuralMap'; // Adjust path
import MuralFooter from '../components/MuralFooter/MuralFooter'; // Adjust path

function JuanitaCreekPage() {
  return (
    <div>
      <MuralHeader />
      <MuralHero/> 
      <MuralCarousel/> 
      <MuralMap />
      <MuralFooter />
    </div>
  );
}

export default JuanitaCreekPage;