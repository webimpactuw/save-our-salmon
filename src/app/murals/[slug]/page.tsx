import { sanityFetch, urlFor } from '@/app/sanity/client';
import Marquee from 'react-fast-marquee';
import styles from './page.module.scss';
import { redirect } from 'next/navigation';

const MuralShowcase = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const query = `*[_type=='mural' && slug.current=="${slug}"][0] {
    _id, title, cover, images, sponsors,
  }`;
  const data: any = await sanityFetch({ query });
  if (!data) {
    redirect('/murals');
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>
          {data.title.split(' ').map((word: string, i: number) => (
            <>
              {word}
              {i !== data.title.split(' ').length - 1 ? <br /> : null}
            </>
          ))}
        </div>
        <img src={urlFor(data.cover) || ''} />
      </div>
      <div className={styles.waveTop1} />
      {data.sponsors?.images.length > 0 && (
        <div className={styles.sponsors}>
          <div className={styles.title}>Thanks to our generous sponsors!</div>
          <Marquee className={styles.marquee} direction="right">
            {data.sponsors.images.map((img: any, i: number) => (
              <img
                key={i}
                className={styles.sponsor}
                src={urlFor(img) || ''}
                alt={'Sponsor'}
              />
            ))}
          </Marquee>
        </div>
      )}
      <div className={styles.waveBottom1} />
      {data.images.images.map((img: any, i: number) => (
        <div key={i} className={styles.before}>
          <img src={urlFor(img) || ''} />
        </div>
      ))}
      <div className={styles.mapWrapper}>
        <div className={styles.title}>Want to see this mural?</div>
        <iframe
          className={styles.map}
          width="100%"
          height="60"
          src="https://maps.google.com/maps?q=9702%20Juanita%20Dr%20NE,%20Kirkland,%20WA%2098034&t=&z=13&ie=UTF8&iwloc=&output=embed"
        />
      </div>
    </div>
  );
};

export default MuralShowcase;
