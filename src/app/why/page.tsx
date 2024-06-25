import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="why"][0] {
  SplashImage, Title, WhySalmon, WhySalmonImage, WhyMurals, Stats
}`;

const Why = async () => {
  const data: any = await sanityFetch({ query });

  const { Title, WhySalmon, WhySalmonImage, WhyMurals, Stats } = data;

  return (
    <div>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>WHY</div>
        <img src={urlFor(data.SplashImage) || ''} />
      </div>
      <div className={styles.waveTop1}></div>
      <div className={styles.title}>{Title}</div>
      <div className={styles.whySalmon}>
        <div className={styles.text}>
          <div className={styles.heading}>Why Salmon?</div>
          <p>{WhySalmon}</p>
        </div>
        <img src={urlFor(WhySalmonImage) || ''} />
      </div>
      <div className={styles.whyMurals}>
        <div className={styles.heading}>Why Murals?</div>
        <p>{WhyMurals}</p>
      </div>
      <div style={{ textAlign: 'center', marginBottom: '10rem' }}>
        <span className={styles.impact}>
          Can art really save salmon?{' '}
          <span style={{ all: 'inherit', color: 'var(--light-deep-blue)' }}>
            YES,
          </span>{' '}
          here&apos;s why...
        </span>
      </div>
      <div className={styles.statsWrapper}>
        <div className={styles.statRow}>
          {Stats?.Stats.map((stat: any, i: number) => (
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
    </div>
  );
};

export default Why;
