import Marquee from 'react-fast-marquee';
import { sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';
import { WaveContainer } from '../components/WaveContainer';
import { Paginator } from '../components/Paginator';
import { UnstyledLink } from '../components/UnstyledLink';

const query = `*[_type=="press"][0] {
  SplashImage, AsSeenOn, Articles, Videos, Podcasts, AdditionalVideo
}`;

const Press = async () => {
  const data: any = await sanityFetch({ query });
  const { SplashImage, AsSeenOn, Articles, Videos, Podcasts, AdditionalVideo } =
    data;

  return (
    <div style={{ marginBottom: '10rem' }}>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>PRESS</div>
        <img src={urlFor(SplashImage) || ''} />
      </div>
      <div className={styles.waveTop1}></div>
      <div className={styles.title}>
        <span>
          We&apos;re Making Waves in the{' '}
          <span style={{ all: 'inherit', color: 'var(--light-deep-blue)' }}>
            News
          </span>
        </span>
      </div>
      <div className={styles.asSeenOn}>As Seen On...</div>
      <Marquee className={styles.marquee}>
        {data.AsSeenOn?.images?.map((link: any, i: number) => (
          <img
            key={i}
            src={urlFor(link) || ''}
            style={{
              width: '15rem',
              height: '15rem',
              margin: '0 5rem',
              objectFit: 'contain',
              objectPosition: '50% 50%',
            }}
          />
        ))}
      </Marquee>
      <div className={styles.asSeenOn}>Articles</div>
      <WaveContainer>
        <Paginator
          elements={
            Articles?.map(
              ({ Logo, ArticleImage, Link, Caption }: any, i: number) => (
                <UnstyledLink key={i} href={Link} target="_blank">
                  <div className={styles.genericArticle}>
                    <img className={styles.logo} src={urlFor(Logo) || ''} />
                    <div className={styles.thumbnail}>
                      <img src={urlFor(ArticleImage) || ''} />
                      <div className={styles.caption}>
                        <span>{Caption}</span>
                      </div>
                    </div>
                  </div>
                </UnstyledLink>
              )
            ) || []
          }
          perPage={3}
          intervalMS={5000}
        />
      </WaveContainer>
      <div className={styles.asSeenOn}>Videos</div>
      <WaveContainer color="var(--light-blue)">
        <Paginator
          elements={
            Videos?.map(({ Logo, VideoEmbedUrl }: any, i: number) => (
              <div key={i} className={styles.genericArticle}>
                <img className={styles.logo} src={urlFor(Logo) || ''} />
                <iframe src={VideoEmbedUrl} />
              </div>
            )) || []
          }
          perPage={3}
          intervalMS={5000}
        />
      </WaveContainer>
      <div className={styles.asSeenOn}>Podcasts</div>
      <WaveContainer>
        <Paginator
          elements={
            Podcasts?.map(({ Logo, Link }: any, i: number) => (
              <UnstyledLink key={i} href={Link} target="_blank">
                <img className={styles.podcast} src={urlFor(Logo) || ''} />
              </UnstyledLink>
            )) || []
          }
          perPage={2}
          intervalMS={5000}
        />
      </WaveContainer>
      <div className={styles.asSeenOn}>{AdditionalVideo?.Heading}</div>
      <div className={styles.additionalVideo}>
        <iframe src={AdditionalVideo.EmbedUrl} />
      </div>
    </div>
  );
};

export default Press;
