import Marquee from 'react-fast-marquee';
import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';
import { WaveContainer } from '../components/WaveContainer';
import { Paginator } from '../components/Paginator';
import { UnstyledLink } from '../components/UnstyledLink';

const query = `*[_type=="shop"][0] {
  SplashImage, EtsyLink
}`;

const Press = async () => {
  const data: any = (await sanityFetch({ query })) || {};
  const { SplashImage, EtsyLink } = data;

  return (
    <div style={{ marginBottom: '10rem' }}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>Shop</div>
        {SplashImage && <img src={urlFor(SplashImage) || ''} />}
      </div>
      <div className={styles.waveTop1}></div>
      <div className={styles.title}>
        <span>
          Purchase With A <span>Purpose</span>
        </span>
      </div>
      <div className={styles.subtitle}>
        <span>
          <span>100% of proceeds</span> go to North Lake Washington
          SalmonWatchers — supporting restoration in local streams
        </span>
      </div>
      <UnstyledLink href={EtsyLink} target="_blank">
        <div className={styles.etsyLink}>Visit Our Etsy!</div>
      </UnstyledLink>
      <div className={styles.subtitle}>
        <span>
          SOS merch has raised $4,500 (and counting!) to restore local salmon
          streams
        </span>
      </div>
    </div>
  );
};

export default Press;
