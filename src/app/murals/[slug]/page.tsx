import { sanityFetch, urlFor } from '@/app/sanity/client';
import Marquee from 'react-fast-marquee';
import styles from './page.module.scss';
import { redirect } from 'next/navigation';
import { WaveContainer } from '@/app/components/WaveContainer';

const MuralShowcase = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const query = `*[_type=='mural' && slug.current=="${slug}"][0] {
    _id, Order, title, slug, Upcoming, when, cover, VideoEmbedUrl, Description, ShowcaseImages, BeforeImage, VolunteerSection, SpecialImage, Address
  }`;
  const data: any = await sanityFetch({ query });
  if (!data) {
    redirect('/murals');
  }

  const {
    VideoEmbedUrl,
    Description,
    ShowcaseImages,
    BeforeImage,
    VolunteerSection,
    SpecialImage,
    Address,
  } = data;

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
      <div className={styles.waveBottom1} />
      {VideoEmbedUrl && (
        <div className={styles.videoContainer}>
          <iframe src={VideoEmbedUrl} />
        </div>
      )}
      <WaveContainer>
        <p className={styles.description}>{Description}</p>
        {ShowcaseImages && (
          <Marquee
            style={{
              width: '100vw',
              paddingTop: '2.5rem',
              paddingBottom: '5rem',
            }}
          >
            {ShowcaseImages.map((image: any, i: number) => (
              <img
                key={i}
                src={urlFor(image) || ''}
                style={{
                  width: '50rem',
                  height: '35rem',
                  objectFit: 'cover',
                  marginRight: '7.5rem',
                  borderRadius: 10,
                }}
              />
            ))}
          </Marquee>
        )}
      </WaveContainer>
      {BeforeImage && (
        <>
          <div className={styles.subtitle}>Before: The Blank Wall...</div>
          <img
            style={{ width: '100%', height: '50rem', objectFit: 'cover' }}
            src={urlFor(BeforeImage) || ''}
          />
        </>
      )}
      {VolunteerSection && (
        <>
          <div className={styles.subtitle} style={{ textAlign: 'end' }}>
            {VolunteerSection.Title}
          </div>
          <Marquee style={{ width: '100vw', marginBottom: '10rem' }}>
            {VolunteerSection.Images.map((image: any) => (
              <img
                style={{
                  height: '50rem',
                  objectFit: 'cover',
                  marginRight: '10rem',
                  borderRadius: 10,
                }}
                src={urlFor(image) || ''}
              />
            ))}
          </Marquee>
        </>
      )}
      {SpecialImage && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '10rem',
          }}
        >
          <img
            style={{
              width: '80%',
              height: '60rem',
              objectFit: 'cover',
              borderRadius: 10,
            }}
            src={urlFor(SpecialImage) || ''}
          />
        </div>
      )}
      <WaveContainer>
        <div className={styles.mapWrapper}>
          <div className={styles.title}>Want to see this mural?</div>
          <iframe
            className={styles.map}
            width="100%"
            height="60"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              Address
            )}&output=embed`}
          />
        </div>
      </WaveContainer>
    </div>
  );
};

export default MuralShowcase;
