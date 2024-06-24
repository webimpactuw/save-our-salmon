import { UnstyledLink } from '../components/UnstyledLink';
import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="involvement"][0] {
  SplashImage
}`;

const Events = async () => {
  const data: any = (await sanityFetch({ query })) || {};
  const { SplashImage } = data;

  return (
    <div style={{ marginBottom: '10rem' }}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>Get Involved</div>
        {SplashImage && <img src={urlFor(SplashImage) || ''} />}
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.title}>Join the SOS Movement!</div>
      <div
        style={{
          color: 'var(--deep-blue)',
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        Here&apos;s How You Can Get Involved :)
      </div>
      <div className={styles.step}>1. As a Volunteer: Attend an Event</div>
      <div className={styles.step}>
        2. As a Steward: Sign Up to be a Salmon Watcher!
      </div>
      <div className={styles.step}>
        3. As an Educator: Teach SOS in Your Classroom!
      </div>
      <div className={styles.step}>
        4. As a Wall Owner: Commission a Mural on Your Wall!
      </div>
      <div className={styles.step}>
        5. As an Artist: Paint Your Own SOS Mural!
      </div>
      <div className={styles.step}>
        6. As an Employee: Help Us Facilitate Behind-the-Scenes
      </div>
      <div className={styles.join}>
        Want to join our team?{' '}
        <UnstyledLink href="/contact" style={{ color: 'var(--red)' }}>
          Contact us!
        </UnstyledLink>
      </div>
    </div>
  );
};

export default Events;
