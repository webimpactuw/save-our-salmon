import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import { sanityFetch, urlFor } from '../sanity/client';
import { Mural } from './components/Mural';
import { redirect } from 'next/navigation';

const query = `*[_type=="mural"][0...100] {
  _id, title, slug, cover
}`;

const MainPage = async () => {
  const murals: any[] = await sanityFetch({ query });
  console.log(murals);

  return (
    <div className={styles.wrapper}>
      <div className={styles.murals}>
        {murals.map(sanity => {
          return (
            <Mural
              key={sanity._id}
              href={'/murals/' + sanity.slug.current}
              name={sanity.title}
              thumbnailSrc={urlFor(sanity.cover) || ''}
            />
          );
        })}
      </div>
      <div className={styles.mapWrapper}>
        <div className={styles.title}>Visit Our Murals!</div>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/d/embed?mid=1M_739oTzpxuk9yLECmD_KPspbTaT-oM&ehbc=2E312F"
        ></iframe>
      </div>
    </div>
  );
};

export default MainPage;
