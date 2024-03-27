import React from 'react';
import styles from './MuralHeader.module.scss';

function MuralHeader() {
  return (
    <header className={styles.muralHeader}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <a href="/">
            <img src="public/SOSTA color gray.png" alt="Logo" />
          </a>
        </div>
        <nav className={styles.navigation}>
          <a href="/murals">Murals</a>
          <a href="/events">Events</a>
          <a href="/shop">Shop</a>
          <a href="/about-us">About Us</a>
          <a href="/resources">Resources</a>
        </nav>
      </div>
    </header>
  );
}

export default MuralHeader;