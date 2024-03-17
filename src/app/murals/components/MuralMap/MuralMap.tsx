import React from 'react';
import styles from './MuralMap.module.scss';

function MuralMap() {
  return (
    <div className={styles.muralMap}>
      <div className={styles.mapContainer}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21473.887789030898!2d-122.22087956216494!3d47.718669029285884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54901268645f6c2b%3A0x3d1eba384592d0be!2sJuanita%20Creek!5e0!3m2!1sen!2sus!4v1710658602225!5m2!1sen!2sus" 
        width="800" 
        height="600" 
        style="border:0;" 
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      </div>
    </div>
  );
}

export default MuralMap;