// import styles from './pages.module.scss';

// export default function JuanitaCreekHome () {
//     return <div>Juanita Creek Home</div>
// }

// In JuanitaCreekPage.js
import React from 'react';
import MuralHeader from '../components/MuralHeader';
import MuralHero from '../components/MuralHero';
import MuralCarousel from '../components/MuralCarousel';
import MuralMap from '../components/MuralMap';
import MuralFooter from '../components/MuralFooter';

function JuanitaCreekPage() {
  return (
    <div>
      <MuralHeader />
      <MuralHero creekName="Juanita Creek" />
      <MuralCarousel creekName="Juanita Creek" />
      <MuralMap creekName="Juanita Creek" />
      <MuralFooter />
    </div>
  );
}

export default JuanitaCreekPage;

