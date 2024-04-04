'use client';
import React, { useState } from 'react';
import styles from './page.module.scss';
import { UnstyledLink } from '../components/UnstyledLink';

interface MuralProps {
  href: string;
  name: string;
  thumbnailSrc: string;
}

const Mural = ({ href, name, thumbnailSrc }: MuralProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <UnstyledLink href={href}>
      <div
        className={styles.mural}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.overlay} style={{ opacity: hovered ? 1 : 0 }}>
          {name}
        </div>
        <img src={thumbnailSrc} />
      </div>
    </UnstyledLink>
  );
};

const MainPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.murals}>
        <Mural
          href="/murals/Juanita-Creek"
          name="Juanita Creek"
          thumbnailSrc="/Juanita Header.jpg"
        />
        <Mural
          href="/murals/McAleer-Creek"
          name="McAleer Creek"
          thumbnailSrc="/McAleer Header.jpg"
        />
        <Mural
          href="/murals/USGS-Western"
          name="USGS Western"
          thumbnailSrc="/USGS Header.jpg"
        />
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.title}>Visit Our Murals!</div>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/d/embed?mid=1M_739oTzpxuk9yLECmD_KPspbTaT-oM&ehbc=2E312F"
        ></iframe>
      </div>
    </div>
  );
};

export default MainPage;
