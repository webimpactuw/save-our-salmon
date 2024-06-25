import styles from './page.module.scss';
import { UnstyledLink } from '../components/UnstyledLink';
import { sanityFetch, urlFor } from '../sanity/client';
import { WaveContainer } from '../components/WaveContainer';

const query = `*[_type=="about"][0] {
  SplashImage, AustinPfp, AboutAustin, UrbanArtworksDescription, SalmonWatchersDescription, Team, Collaborators, Supporters, Spawnsors,
}`;

const About = async () => {
  const data: any = (await sanityFetch({ query })) || {};
  const {
    SplashImage,
    AustinPfp,
    AboutAustin,
    UrbanArtworksDescription,
    SalmonWatchersDescription,
    Team,
    Collaborators,
    Supporters,
    Spawnsors,
  } = data;

  return (
    <div style={{ marginBottom: '10rem' }}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>About Us</div>
        {SplashImage && <img src={urlFor(SplashImage) || ''} />}
      </div>
      <div className={styles.waveTop1} />
      <div className={styles.austinHeader}>
        <span>
          Founder & Lead Artist:{' '}
          <span style={{ all: 'inherit', color: 'var(--dark-blue)' }}>
            Austin Picinich
          </span>
        </span>
        <img src={urlFor(AustinPfp) || ''} />
      </div>
      <p className={styles.austinDescription}>{AboutAustin}</p>
      <div className={styles.title}>
        <span>
          Teamwork Makes the <span>Stream</span> Work
        </span>
      </div>
      <div className={styles.title}>Our Key Partners</div>
      <WaveContainer>
        <div className={styles.partners}>
          <div className={styles.partner}>
            <img src="/ua.png" />
            <span className={styles.name}>Urban Artworks</span>
            <p className={styles.description}>{UrbanArtworksDescription}</p>
          </div>
          <div className={styles.partner}>
            <img src="/uwb.png" />
            <span className={styles.name}>Salmon Watchers</span>
            <p className={styles.description}>{SalmonWatchersDescription}</p>
          </div>
        </div>
      </WaveContainer>
      <div className={styles.title}>Our Team</div>
      <div className={styles.grid}>
        {Team?.map(({ Pfp, Name, Role }: any, i: number) => (
          <div key={i} className={styles.teamMember}>
            <img className={styles.pfp} src={urlFor(Pfp) || ''} />
            <div className={styles.name}>{Name}</div>
            <div className={styles.role}>{Role}</div>
          </div>
        ))}
      </div>
      <div className={styles.join}>
        Want to join our team?{' '}
        <UnstyledLink href="/contact" style={{ color: 'var(--red)' }}>
          Contact Us!
        </UnstyledLink>
      </div>
      <div className={styles.title}>Our Collaborators</div>
      <div className={styles.subtitle}>
        We&apos;ve collaborated with these groups on individual projects
      </div>
      <div className={styles.grid}>
        {Collaborators?.map((image: any, i: number) => (
          <img key={i} src={urlFor(image) || ''} />
        ))}
      </div>
      <div className={styles.title}>Our Supporters</div>
      <div className={styles.subtitle}>
        These groups swim along for the ride as part of our journey
      </div>
      <div className={styles.grid}>
        {Supporters?.map((image: any, i: number) => (
          <img key={i} src={urlFor(image) || ''} />
        ))}
      </div>
      <div className={styles.title}>Our Spawnsors</div>
      <div className={styles.subtitle}>These groups help fund our work</div>
      <div className={styles.grid}>
        {Spawnsors?.map((image: any, i: number) => (
          <img key={i} src={urlFor(image) || ''} />
        ))}
      </div>
    </div>
  );
};

export default About;
