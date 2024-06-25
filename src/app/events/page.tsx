import { UnstyledLink } from '../components/UnstyledLink';
import { UpcomingMural } from '../murals/components/Mural';
import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="involvement"][0] {
  SplashImage
}`;

const eventsQuery = `*[_type=="mural"][0...100] {
  title, Upcoming, when, Address
}`;

const Events = async () => {
  const data: any = (await sanityFetch({ query })) || {};
  const { SplashImage } = data;

  const murals: any = (await sanityFetch({ query: eventsQuery })) || {};
  const upcomingEvents = murals
    .filter((mural: any) => mural.Upcoming !== null && mural.Upcoming !== false)
    .toSorted(
      (a: any, b: any) =>
        new Date(b.when).getTime() - new Date(a.when).getTime()
    )
    .slice(0, 2);

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
      <div className={styles.upcomingEvents}>
        {upcomingEvents.map(({ title, when, Address }: any, i: number) => (
          <UpcomingMural
            key={i}
            name={title}
            when={new Date(when)}
            where={Address}
          />
        ))}
      </div>
      <div className={styles.step}>
        2. As a Steward: Sign Up to be a Salmon Watcher!
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3.5rem',
          marginBottom: '5rem',
        }}
      >
        <img
          style={{ width: '80%', height: '25rem', objectFit: 'contain' }}
          src="/sw.png"
        />
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
