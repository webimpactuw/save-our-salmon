import { sanityFetch } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="how"][0] {
  SplashImage
}`;

const How = async () => {
  const data = await sanityFetch({ query });

  return (
    <div>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>HOW</div>
        <img src="/SOS Austin.jpg" />
      </div>
    </div>
  );
};

export default How;
