import styles from './page.module.scss';

export default function AboutHome() {
  return (
    <div>
        <div className={styles.title}>
            <h1 className={styles.h1}>Save our Salmon Mural Initiative</h1>
        </div>
        <div className={styles.line1}>
            <img src="line1.svg" width="1600"></img>
        </div>
        <div className={styles.imagetext1}>
            <img src="phototemp.svg" className={styles.image1}></img>
            <div>
                <h2 className={styles.h2}>“Public Art with a Purpose”</h2>
                <div>
                    <h3 className={styles.h3}>
                        <br></br><br></br>
                        The Save Our Salmon (SOS) Mural Initiative<br></br>
                        educates, engages, inspires, and empowers<br></br>
                        communites to restore Puget Sound salmon-<br></br>
                        spawning stream - through art. With SOS we:<br></br>
                        <br></br>
                        &nbsp;1. brighten up communities with vibrant art<br></br>
                        &nbsp;2. engage community in Community Paint Days<br></br>
                        &nbsp;3. bring awareness and action restoring PNW<br></br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;streams<br></br>
                        <br></br>
                    </h3>
                    <h3 className={styles.h3center}>📍 Greater Seattle, WA</h3>
                </div>
            </div>
        </div>
        <div className={styles.line2}>
            <img src="line2.svg" width="1300"></img>
        </div>
    </div>
  );
}
