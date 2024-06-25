'server-only';
import styles from './page.module.scss';
import { UnstyledLink } from './components/UnstyledLink';
import { sanityFetch, urlFor } from './sanity/client';
import Marquee from 'react-fast-marquee';

const query = `*[_type=="home"][0] {
  Showcase, Stats, ImpactLinks
}`;

const Home = async () => {
  const data: any = await sanityFetch({ query });

  return (
    <main className={styles.main}>
      <div className={styles.videoWrapper}>
        <div className={styles.shade}>
          <div className={styles.tag}>
            SAVING OUR SALMON
            <br />
            through ART
          </div>
          <UnstyledLink href="/murals" className={styles.muralsLink}>
            Visit Our Murals
          </UnstyledLink>
        </div>
        <video
          className={styles.video}
          src="/SOS-Homepage-video.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className={styles.center}>
        <div className={styles.waveTop1}></div>
        <div className={styles.tagline}>
          Public Art with a{' '}
          <span style={{ color: 'var(--deep-blue)', fontSize: 'inherit' }}>
            Purpose.
          </span>
        </div>
        <p className={styles.whatWeDo}>
          Save Our Salmon (SOS) through Art educates, engages, inspires, and
          empowers communities to restore Puget Sound salmon-spawning streams -
          through art.
        </p>
      </div>
      <Marquee style={{ margin: '10rem 0' }}>
        {data.Showcase.images?.map((image: any, i: number) => (
          <img
            key={i}
            src={urlFor(image) || ''}
            style={{
              width: '50rem',
              height: '35rem',
              margin: '0 5rem',
              marginTop: i % 2 === 0 ? '3.5rem' : '-3.5rem',
              objectFit: 'cover',
              // border: `5px solid ${
              //   i % 2 === 0 ? 'var(--dark-blue)' : 'var(--light-deep-blue)'
              // }`,
              borderRadius: 10,
            }}
          />
        ))}
      </Marquee>
      <div className={styles.mission}>
        <div className={styles.title}>
          Our{' '}
          <span
            style={{
              color: 'var(--deep-blue)',
              fontSize: 'inherit',
              fontWeight: 'inherit',
            }}
          >
            Mission
          </span>
        </div>
        <div className={styles.statement}>
          We&apos;re anchored by 4 founding values:
        </div>
      </div>
      <div className={styles.waveTop2}></div>
      <div className={styles.waveTop3}></div>
      <div className={styles.waveBetween1}>
        <div className={styles.whatWeDoItem}>
          <span className={styles.emphasis}>Paint.</span>Brighten communities
          with Vibrant Art
        </div>
        <div className={styles.whatWeDoItem}>
          <span className={styles.emphasis}>Engage.</span>Involve neighbors in
          Community Paint days
        </div>
        <div className={styles.whatWeDoItem}>
          <span className={styles.emphasis}>Teach.</span>
          Educate participants to protect local streams
        </div>
        <div className={styles.whatWeDoItem}>
          <span className={styles.emphasis}>Restore.</span>
          Create a community of salmon stewards
        </div>
      </div>
      <div className={styles.waveBottom2}></div>
      <div className={styles.waveBottom1}></div>
      <div className={styles.statsTitle}>
        Our{' '}
        <span style={{ color: 'var(--deep-blue)', fontSize: 'inherit' }}>
          Impact
        </span>
      </div>
      <div className={styles.statsWrapper}>
        <div className={styles.statRow}>
          {data?.Stats.Stats.map((stat: any, i: number) => (
            <div key={i} className={styles.stat}>
              <div className={styles.statNumber}>
                {stat.Amount}
                {stat.Plus && (
                  <span style={{ color: 'var(--red)', fontSize: 'inherit' }}>
                    +
                  </span>
                )}
              </div>
              <div className={styles.statName}>{stat.Description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.impact}>
        <div className={styles.title}>Check out our impact on:</div>
        <Marquee className={styles.marquee}>
          {data.ImpactLinks?.Images?.map((link: any, i: number) => (
            <UnstyledLink key={i} href={link.Link} target="_blank">
              <img
                src={urlFor(link.Image) || ''}
                style={{
                  width: '15rem',
                  height: '15rem',
                  margin: '0 5rem',
                  objectFit: 'contain',
                  objectPosition: '50% 50%',
                }}
              />
            </UnstyledLink>
          ))}
        </Marquee>
      </div>
    </main>
  );
};

export default Home;
