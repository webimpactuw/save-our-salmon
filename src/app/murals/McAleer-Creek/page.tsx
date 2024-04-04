import React from 'react';
import styles from './page.module.scss';
import Marquee from 'react-fast-marquee';

function McAleerCreekPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>
          McAleer
          <br />
          Creek
        </div>
        <img src="/McAleer Header.jpg" />
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.sponsors}>
        <div className={styles.title}>Thanks to our generous sponsors!</div>
        <Marquee className={styles.marquee} direction="right">
          <img
            className={styles.sponsor}
            src="/Puget Sound Starts Here.png"
            alt="Puget Sound Starts Here"
          />
          <img
            className={styles.sponsor}
            src="/urban artworks.png"
            alt="Urban Artworks"
          />
          <img
            className={styles.sponsor}
            src="/UW Bothell Bio Sci.png"
            alt="UW Bothell Biosciences"
          />
          <img
            className={styles.sponsor}
            src="/ShoreLake Arts.png"
            alt="ShoreLake Arts"
          />
          <img
            className={styles.sponsor}
            src="/Trout Unlimited.png"
            alt="Trout Unlimited"
          />
          <img
            className={styles.sponsor}
            src="/Trout Unlimited Three Rivers.png"
            alt="Trout Unlimited Three Rivers Chapter"
          />
          <img
            className={styles.sponsor}
            src="/City of Lake Forest Park.png"
            alt="City of Lake Forest Park"
          />
          <img
            className={styles.sponsor}
            src="/LFP Water District.png"
            alt="LFP Water District"
          />
        </Marquee>
      </div>
      <div className={styles.waveBottom1} />
      <div className={styles.before}>
        <img src="/McAleer Blank.jpg" />
      </div>
      <div className={styles.after}>
        <img src="/McAleer After.png" />
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.title}>Want to see this mural?</div>
        <iframe
          className={styles.map}
          width="100%"
          height="60"
          src="https://maps.google.com/maps?q=17435 Brookside Blvd NE, Lake Forest Park, WA 98155&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}

export default McAleerCreekPage;
