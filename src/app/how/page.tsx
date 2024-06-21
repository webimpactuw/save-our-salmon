import { getUrlFromId, sanityFetch, urlFor } from '../sanity/client';
import styles from './page.module.scss';

const query = `*[_type=="how"][0] {
  SplashImage, HowItWorksDescription, HowItWorksEmbedUrl, HowToLeadDescription, HowToLeadEmbedUrl, download,
}`;

const How = async () => {
  const data: any = await sanityFetch({ query });
  const {
    SplashImage,
    HowItWorksDescription,
    HowItWorksEmbedUrl,
    HowToLeadDescription,
    HowToLeadEmbedUrl,
    download,
  } = data;

  console.log(download);

  return (
    <div>
      <div className={styles.splash}>
        <div className={styles.shade} />
        <div className={styles.name}>HOW</div>
        <img src={SplashImage ? urlFor(SplashImage) || '' : ''} />
      </div>
      <div className={styles.waveTop1}></div>
      <div className={styles.title}>How It Works: Paint By Numbers</div>
      <p className={styles.description}>{HowItWorksDescription}</p>
      <div className={styles.embedWrapper}>
        <iframe src={HowItWorksEmbedUrl} title="How it works YT video" />
      </div>
      <div className={styles.title}>How to Lead Your Own Mural</div>
      <p className={styles.description}>{HowItWorksDescription}</p>
      <div className={styles.embedWrapper}>
        <iframe src={HowItWorksEmbedUrl} title="How it works YT video" />
      </div>
      <div className={styles.downloadWrapper}>
        <a
          href={getUrlFromId(download.DownloadFile.asset._ref) || '#'}
          download
          target="_blank"
        >
          {download.Title}
        </a>
      </div>
    </div>
  );
};

export default How;
