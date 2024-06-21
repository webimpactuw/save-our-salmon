import { UnstyledLink } from '../components/UnstyledLink';
import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="involvement"][0] {
  SplashImage
}`;

const Events = async () => {
  const data: any = await sanityFetch({ query });

  return (
    <div className={styles.wrapper}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>Get Involved</div>
        <img src={urlFor(data.SplashImage) || ''} />
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.title}>Events</div>
      <div className={styles.subtitle}>Community Paint Days</div>
      <p className={styles.description}>
        We host Community Paint Days to “paint by number” SOS Murals - meaning
        ANYONE can help paint! We partner with Seattle-based nonprofit Urban
        ArtWorks to host Community Paint Days.
      </p>
      <p className={styles.description}>
        Our first Paint Day for the Kirkland SOS Mural was held in April 2022
        with 160+ volunteers to paint. All volunteer painting spots filled
        within 1 hour of opening signups - we were blown away by the
        overwhelming support! Our Lake Forest Park Paint Day had 200+ volunteer
        painters in September 2022. And most recently, our Magnuson Park Seattle
        Paint Day had 350+ painters!!
      </p>
      <div className={styles.subtitle}>Interested?</div>
      <UnstyledLink href="https://www.austinsart.net/events" target="_blank">
        <div className={styles.salmonButton}>
          <img src="/Salmon B.png" />
          <div className={styles.text}>Updates Here!</div>
        </div>
      </UnstyledLink>
    </div>
  );
};

export default Events;
