import { UnstyledLink } from '../components/UnstyledLink';
import { sanityFetch } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=='donate'][0] {
  DonationLink
}`;

const Donate = async () => {
  const data: any = await sanityFetch({ query });

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <span>
          Become A <span>Spawnsor</span> Today!
        </span>
      </div>
      <div className={styles.subtitle}>Your donations make ripples!</div>
      <UnstyledLink href={data.DonationLink} target="_blank">
        <div className={styles.donate}>Donate Here!</div>
      </UnstyledLink>
    </div>
  );
};

export default Donate;
