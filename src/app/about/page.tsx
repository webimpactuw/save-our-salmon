import styles from './page.module.scss';

export default function AboutHome() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Inter"
        rel="stylesheet"
      ></link>
      <div className={styles.title}>
        <h1 className={styles.h1}>Save our Salmon Mural Initiative</h1>
      </div>
      <div className={styles.line1}>
        <img src="line1.svg" width="1600"></img>
      </div>
      <div className={styles.imagetext}>
        <img src="phototemp.svg" className={styles.image1}></img>
        <div>
          <h2 className={styles.h2}>“Public Art with a Purpose”</h2>
          <div>
            <h3 className={styles.h3}>
              <br></br>
              <br></br>
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
      <div className={styles.imagetext}>
        <div>
          <h2 className={styles.h2}>How the First SOS Mural Started...</h2>
          <div>
            <h3 className={styles.h3}>
              <br></br>
              Why murals? Why salmon?<br></br>
              When I was in 11th grade, I learned<br></br>
              Juanita Creek – the salmon-spawning<br></br>
              stream less than one minute from my<br></br>
              backyard in Kirkland, WA – had only 3<br></br>
              salmon return to spawn in 2021.<br></br>
              <br></br>
              Every day I’d pass Juanita Creek on my<br></br>
              drive to school - yet prior to 11th grade, I<br></br>
              never paid much attention to the hidden<br></br>
              stream. Many of Lake Washington’s<br></br>
              urban creeks are completely hidden<br></br>
              under culverts, flowing below paved<br></br>
              roads. Despite being right below our<br></br>
              eyes, Juanita Creek had become “out of<br></br>
              sight, and out of mind”.
              <br></br>
            </h3>
          </div>
        </div>
        <img src="phototemp.svg" className={styles.image1}></img>
      </div>
      <div>
        <h3 className={styles.h3left}>
          <br></br>
          On my daily commute to Juanita High School, I would pass a 112-foot
          blank boring wall<br></br>
          across from Juanita Creek. As an artist, I realized I could combine
          these two problems –<br></br>
          hidden streams, and blank dull walls. My simple idea grew into a big
          idea: using my love<br></br>
          of art to educate, excite, and engage my community in restoring
          Juanita Creek. My first<br></br>
          “Save Our Salmon (SOS) Mural” was born.<br></br>
          <br></br>
          These once “hidden” streams are now focal points, with so far 720+
          volunteers helping<br></br>
          paint 430+ feet of SOS Murals painted along 3+ streams and counting!
        </h3>
      </div>
      <div className={styles.line2}>
        <img src="line2.svg" width="1300"></img>
      </div>
      <div>
        <h2 className={styles.h2}>
          Can ART really save salmon?<br></br>
          YES - here’s why<br></br>
          <br></br>
          <br></br>
        </h2>
        <div className={styles.statistics}>
          <div>
            <h4 className={styles.h4}>46</h4>
            <h3 className={styles.h3small}>community groups involved</h3>
          </div>
          <div>
            <h4 className={styles.h4}>$23,541 +</h4>
            <h3 className={styles.h3small}>
              raised for stream awareness, education,<br></br>
              and restoration
            </h3>
          </div>
          <div>
            <h4 className={styles.h4}>720 +</h4>
            <h3 className={styles.h3small}>volunteer painters</h3>
          </div>
        </div>
      </div>
      <div className={styles.line2}>
        <img src="line2.svg" width="1300"></img>
      </div>
    </div>
  );
}
