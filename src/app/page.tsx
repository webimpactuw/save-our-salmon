import styles from './page.module.scss';
import Map from './components/Map';

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.videoWrapper}>
        <div className={styles.shade} />
        <video
          className={styles.video}
          src="/SOS-Homepage-video.mp4"
          autoPlay
          muted
          loop
        />
      </div>
      <div className={styles.center}>
        <div className={styles.waveTop1}></div>
        <div className={styles.tagline}>Public Art with a Purpose.</div>
        <p className={styles.whatWeDo}>
          The Save Our Salmon (SOS) Mural Initiative educates, engages,
          inspires, and empowers communities to restore Puget Sound
          salmon-spawning streams - through art. With SOS, we:
        </p>
      </div>
      <div className={styles.waveTop2}></div>
      <div className={styles.waveTop3}></div>
      <div className={styles.waveBetween1}>
        <div className={styles.whatWeDoItem}>
          <i>Brighten Up</i> Communities with Vibrant Art
        </div>
        <div className={styles.whatWeDoItem}>
          <i>Engage</i> Community in Community Paint Days
        </div>
        <div className={styles.whatWeDoItem}>
          <i>Bring Awareness and Action</i> Restoring PNW Streams
        </div>
      </div>
      <div className={styles.waveBottom2}></div>
      <div className={styles.waveBottom1}></div>
      <div className={styles.statsWrapper}>
        <div>
          <div className={styles.moneyRaised}>$26K+</div>
          <div className={styles.subtitle}>
            Raised for Stream Education & Restoration
          </div>
        </div>
        <div className={styles.statRow}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>4+</div>
            <div className={styles.statName}>Murals</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>700+</div>
            <div className={styles.statName}>Painters</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>40+</div>
            <div className={styles.statName}>Community Groups</div>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default Home;
