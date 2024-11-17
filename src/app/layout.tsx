'use client';
import { Fredoka } from 'next/font/google';
import styles from './layout.module.scss';
import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { UnstyledLink } from './components/UnstyledLink';
import { useSelectedLayoutSegment } from 'next/navigation';
import { GoogleAnalytics } from '@next/third-parties/google';

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <html lang="en">
      <body className={`${fredoka.className} ${fredoka.variable}`}>
        <div className={styles.layout}>
          <nav className={styles.nav}>
            <div className={styles.navLayout}>
              <UnstyledLink href="/">
                <Image
                  src="/SOSTA color white.png"
                  alt="Save Our Salmon"
                  width={100}
                  height={75}
                  className={styles.logo}
                />
              </UnstyledLink>
              <div className={styles.links}>
                <Link
                  className={`${styles.link} ${
                    segment === 'murals' ? styles.selected : undefined
                  }`}
                  href="/murals"
                >
                  Our Work
                </Link>
                <Link
                  className={`${styles.link} ${
                    segment === 'how' ? styles.selected : undefined
                  }`}
                  href="/how"
                >
                  How
                </Link>
                <Link
                  className={`${styles.link} ${
                    segment === 'press' ? styles.selected : undefined
                  }`}
                  href="/press"
                >
                  Press
                </Link>
                <Link
                  className={`${styles.link} ${
                    segment === 'about' ? styles.selected : undefined
                  }`}
                  href="/about"
                >
                  About Us
                </Link>
                <Link
                  className={`${styles.link} ${
                    segment === 'events' ? styles.selected : undefined
                  }`}
                  href="/events"
                >
                  Get Involved
                </Link>
              </div>
              <div className={styles.donateShop}>
                <UnstyledLink href="/donate">
                  <button className={styles.donate}>Donate</button>
                </UnstyledLink>
                <UnstyledLink href="/shop">
                  <button className={styles.shop}>Shop</button>
                </UnstyledLink>
              </div>
            </div>
          </nav>
          <div>{children}</div>
          <div className={styles.footer}>
            <div className={styles.wave1}></div>
            <div className={styles.wave2}></div>
            <div className={styles.wave3}></div>
            <div className={styles.wave4}>
              <Image
                className={styles.footerLogo}
                src="/SOSTA color white.png"
                alt="Logo"
                width="125"
                height="125"
              />
              <div className={styles.footerContent}>
                <UnstyledLink
                  target="_blank"
                  href="https://3efc33b6.sibforms.com/serve/MUIEAFEKNKmHyWicrOB4cWLscInZ77HQQLg2YaSnSo7-jjmoMjtBAYqdSfolhh3gk5KRKY84pqz0CV_1YRw66Wiu5LLYz6twliCAnKEsOnumg1h9KzMiVtzjkEYDAXdr1qmZtJmJ1azisEz4y5oVlV6yXOhb4SlFV0AKVnIRzZzikDB2z0KQXWK4vJG4K6DAf_87kgvSLexf2BE3"
                >
                  <button className={styles.subscribe}>
                    Subscribe to Our Newsletter!
                  </button>
                </UnstyledLink>
                <div className={styles.socials}>
                  <UnstyledLink
                    href="https://www.instagram.com/salmonmurals/"
                    target="_blank"
                  >
                    <div className={styles.social}>
                      <FaInstagram />
                    </div>
                  </UnstyledLink>
                  <UnstyledLink
                    href="https://www.facebook.com/austins.awesome.art/"
                    target="_blank"
                  >
                    <div className={styles.social}>
                      <FaFacebookF />
                    </div>
                  </UnstyledLink>
                  <UnstyledLink
                    href="https://youtube.com/@SalmonMurals"
                    target="_blank"
                  >
                    <div className={styles.social}>
                      <FaYoutube />
                    </div>
                  </UnstyledLink>
                  <UnstyledLink
                    href="https://www.linkedin.com/in/austinpicinich/"
                    target="_blank"
                  >
                    <div className={styles.social}>
                      <FaLinkedin />
                    </div>
                  </UnstyledLink>
                </div>
              </div>
              <UnstyledLink href="/contact" className={styles.contact}>
                Contact Us!
              </UnstyledLink>
            </div>
          </div>
        </div>
      </body>
      <GoogleAnalytics gaId="G-WMJ9ECL4TK" />
    </html>
  );
}
