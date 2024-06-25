import React from 'react';
import styles from './page.module.scss';
import { sanityFetch, urlFor } from '../sanity/client';
import { Mural, UpcomingMural } from './components/Mural';
import { url } from 'inspector';
import { WaveContainer } from '../components/WaveContainer';

const query = `*[_type=="mural"][0...100] {
  _id, Order, title, slug, Upcoming, when, cover, Description, Showcase, BeforeImage, VolunteerPhotos, SpecialImage, Address
}`;

const MainPage = async () => {
  const murals: any[] = await sanityFetch({ query });
  const finishedMurals = murals
    .filter((mural: any) => mural.Upcoming === null || mural.Upcoming === false)
    .toSorted((a: any, b: any) => a.Order - b.Order);
  const upcomingMurals = murals
    .filter((mural: any) => mural.Upcoming !== null && mural.Upcoming !== false)
    .toSorted((a: any, b: any) => a.Order - b.Order);

  return (
    <div className={styles.wrapper}>
      <div className={styles.murals}>
        {finishedMurals.map(mural => {
          return (
            <Mural
              key={mural._id}
              href={'/murals/' + mural.slug.current}
              name={mural.title}
              thumbnailSrc={urlFor(mural.cover) || ''}
            />
          );
        })}
        {upcomingMurals.map(mural => (
          <UpcomingMural
            key={mural._id}
            name={mural.title}
            when={new Date(mural.when)}
            where={mural.Address}
          />
        ))}
      </div>
      <div className={styles.title}>Visit Our Murals!</div>

      <WaveContainer>
        <div className={styles.mapWrapper}>
          <iframe
            className={styles.map}
            src="https://www.google.com/maps/d/embed?mid=1M_739oTzpxuk9yLECmD_KPspbTaT-oM&ehbc=2E312F"
          />
        </div>
      </WaveContainer>
    </div>
  );
};

export default MainPage;
