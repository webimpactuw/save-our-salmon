import React from 'react';
import styles from './page.module.scss';
import Marquee from 'react-fast-marquee';

function JuanitaCreekPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>
          Juanita
          <br />
          Creek
        </div>
        <img src="/Juanita Header.jpg" />
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.sponsors}>
        <div className={styles.title}>Thanks to our generous sponsors!</div>
        <Marquee className={styles.marquee} direction="right">
          <img
            className={styles.sponsor}
            src="/Kirkland Parks & Community.png"
            alt="Kirkland Parks & Community"
          />
          <img
            className={styles.sponsor}
            src="/urban artworks.png"
            alt="Urban Artworks"
          />
          <img className={styles.sponsor} src="/FHNA.png" alt="FHNA" />
          <img className={styles.sponsor} src="/JNA.png" alt="JNA" />
          <img className={styles.sponsor} src="/Kiwanis.png" alt="Kiwanis" />
          <img
            className={styles.sponsor}
            src="/Kirkland Cultural Arts Commission.png"
            alt="Kirkland Cultural Arts Commission"
          />
          <img
            className={styles.sponsor}
            src="/City of Kirkland.png"
            alt="City of Kirkland"
          />
          <img
            className={styles.sponsor}
            src="/UW Bothell Bio Sci.png"
            alt="UW Bothell Biosciences"
          />
          <img
            className={styles.sponsor}
            src="/SPUD.png"
            alt="SPUD Fish and Chips"
          />
          <img
            className={styles.sponsor}
            src="/first tee.png"
            alt="First Tee"
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
        </Marquee>
      </div>
      <div className={styles.waveBottom1} />
      <div className={styles.before}>
        <img src="/Juanita Blank.jpg" />
      </div>
      <div className={styles.after}>
        <img src="/Juanita After.jpg" />
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.title}>Want to see this mural?</div>
        <iframe
          className={styles.map}
          width="100%"
          height="60"
          src="https://maps.google.com/maps?q=9702%20Juanita%20Dr%20NE,%20Kirkland,%20WA%2098034&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
}

export default JuanitaCreekPage;
