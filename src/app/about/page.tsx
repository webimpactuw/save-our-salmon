import Image from 'next/image';
import styles from './page.module.scss';
import { UnstyledLink } from '../components/UnstyledLink';

export default function AboutHome() {
  return (
    <div>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <img src="/SOS Austin.jpg" />
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.sectionWrapper}>
        <div className={styles.title}>Our Story</div>
        <div className={styles.subtitle}>Why murals? Why salmon?</div>
        <p className={styles.description}>
          When I was in 11th grade, I learned Juanita Creek – the
          salmon-spawning stream less than one minute from my backyard in
          Kirkland, WA – had only 3 salmon return to spawn in 2021. Every day
          I’d pass Juanita Creek on my drive to school - yet prior to 11th
          grade, I never paid much attention to the hidden stream. Many of Lake
          Washington’s urban creeks are completely hidden under culverts,
          flowing below paved roads. These once “hidden” streams are now focal
          points, with so far 720+ volunteers helping paint 430+ feet of SOS
          Murals painted along 3+ streams and counting!
        </p>
        <div className={styles.subtitle}>The Vision</div>
        <p className={styles.description}>
          Despite being right below our eyes, Juanita Creek had become “out of
          sight, and out of mind”. On my daily commute to Juanita High School, I
          would pass a 112-foot blank boring wall across from Juanita Creek. As
          an artist, I realized I could combine these two problems – hidden
          streams, and blank dull walls. My simple idea grew into a big idea:
          using my love of art to educate, excite, and engage my community in
          restoring Juanita Creek. My first “Save Our Salmon (SOS) Mural” was
          born.
        </p>
      </div>
      <div className={styles.wave1}>
        <div className={styles.top} />
        <div className={styles.content}>
          <div className={styles.title}>The Cause</div>
          <p className={styles.description}>
            I’m partnering with the University of Washington’s North Lake
            Washington SalmonWatchers program to bring this SOS initiative to
            life. SalmonWatchers is working to research, restore, and raise
            awareness for stream health and salmon populations.
          </p>
          <p className={styles.description}>
            The SalmonWatchers program - founded and led by UW Bothell biology
            professor Dr. Jeff Jensen - works with students and community
            volunteers to research and restore local streams. Projects include
            building egg incubators and natural resources for salmon to thrive.
          </p>
          <UnstyledLink
            href="https://www.bothellwa.gov/1413/Salmon-Watcher-Program"
            target="_blank"
          >
            <div className={styles.salmonButton}>
              <img src="/Salmon B.png" />
              <div className={styles.text}>Salmon Watchers</div>
            </div>
          </UnstyledLink>
        </div>
        <div className={styles.bottom} />
      </div>
      <div className={styles.sectionWrapper}>
        <div className={styles.title}>Meet Our Team</div>
        <div className={styles.teamLayout}>
          <div className={styles.member}>
            <img
              className={styles.pfp}
              src="/austin.png"
              alt="Austin Picinich"
            />
            <div className={styles.info}>
              <div className={styles.name}>Austin Picinich</div>
              <div className={styles.role}>Founder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
