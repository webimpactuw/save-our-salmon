import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="press"][0] {
  SplashImage
}`;

const Press = async () => {
  const data: any = await sanityFetch({ query });

  return (
    <div>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>PRESS</div>
        <img src={urlFor(data.SplashImage) || ''} />
      </div>
    </div>
  );
};

export default Press;
