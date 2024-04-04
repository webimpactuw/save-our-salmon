import React from 'react';
import styles from './page.module.scss';
import Marquee from 'react-fast-marquee';

function USGSWesternPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>
          USGS
          <br />
          Western
        </div>
        <img src="/USGS Header.jpg" />
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.before}>
        <img src="/USGS Blank.jpg" />
      </div>
      <div className={styles.after}>
        <img src="/USGS After.jpg" />
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.title}>Want to see this mural?</div>
        <iframe
          className={styles.map}
          width="100%"
          height="60"
          src="https://maps.google.com/maps?q=Magnuson Park, Seattle, WA&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}

export default USGSWesternPage;
