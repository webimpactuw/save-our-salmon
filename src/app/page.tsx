import Link from 'next/link';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        {/* Need to add actual logo instead of just text */}
        <div>SAVE OUR SALMON</div> 
        <div className={styles.links}>
          <Link href="/murals" className='with-dropdown'>Murals</Link>
          <Link href="/events">Events</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/resources">Resources</Link>
          {/* Need to figure out socials icons: youtube, instagram, linkedin, facebook */}
          <div className={styles.socials}>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Home;
