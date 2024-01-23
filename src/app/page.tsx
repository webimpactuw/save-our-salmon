import Link from 'next/link';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div>SAVE OUR SALMON</div>
        <div className={styles.links}>
          <Link href="/about">ABOUT</Link>
        </div>
      </nav>
    </main>
  );
};

export default Home;
