import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <div>
        <Image src="/SOS.png" alt="Save Our Salmon" width={100} height={75} />
        </div>
        {/* <div>SAVE OUR SALMON</div> */}
        <div className={styles.links}>
          <Link href="/murals" className='with-dropdown'>Murals</Link>
          <Link href="/events">Events</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link> 
          <Link href="/resources">Resources</Link>
        </div>
        {/* I tried using imported logos, but I can just do 4 images if we want it exactly like
        the design */}
        <div className={styles.socials}>
          <Link href="https://www.youtube.com/@AustinsAwesomeArt"><FaYoutube /></Link>
          <Link href="https://www.instagram.com/salmonmural/"><FaInstagram /></Link>
          <Link href="https://www.linkedin.com/company/salmonmurals/about/"><FaLinkedin /></Link>
          <Link href="https://www.facebook.com/austins.awesome.art/"><FaFacebookF /></Link>
        </div>
        
      </nav>
    </main>
  );
};

export default Home;
