import Link from 'next/link';
import Image from 'next/image';
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import styles from './page.module.scss';

const Home = () => {
  return (
    <main className={styles.main}>
      
        {/* v include autoPlay before muted to autoplay */}
      <video muted loop id="backgroundVideo" style={{ position: 'fixed', right: '0', bottom: '0', top: '0', minWidth: '100%', minHeight: '100%', zIndex: '-1' }}>
        <source src="/SOS-Homepage-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className={styles.nav}>
        <div style={{marginTop: '15px'}}>
        <Image src="/SOSTA color gray.png" alt="Save Our Salmon" width={100} height={75} />
        </div>
        {/* <div>SAVE OUR SALMON</div> */}
        <div className={styles.links}>
          <Link href="/murals" className='with-dropdown'>Murals</Link>
          <Link href="/events">Events</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link> 
          <Link href="/resources">Resources</Link>
        </div>

        {/* This is the section I had worked on before but it may have been wrong? */}

        {/* I tried using imported logos, but I can just do 4 images if we want it exactly like
        the design */}
        <div className={styles.socials}>
          <Link href="https://www.youtube.com/@AustinsAwesomeArt"><FaYoutube /></Link>
          <Link href="https://www.instagram.com/salmonmural/"><FaInstagram /></Link>
          <Link href="https://www.linkedin.com/company/salmonmurals/about/"><FaLinkedin /></Link>
          <Link href="https://www.facebook.com/austins.awesome.art/"><FaFacebookF /></Link>
      </div>
      </nav>
      <div className={styles.title1}>
        <h1 style={{marginTop: '50rem', fontSize: '2.5rem', color: 'white'}}>Saving Salmon, Through Art</h1>
        {/*<div style={{ position: 'relative', width: '100vw', height: '75px', marginTop: '20rem' }}>
          <Image
            src="/Vector1.png"
            alt="Line Design"
            layout="fill"
          />
      </div>*/}
      </div>

      
    </main>
  );
};

export default Home;
