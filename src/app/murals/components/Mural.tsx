'use client';
import { UnstyledLink } from '@/app/components/UnstyledLink';
import { useState } from 'react';
import styles from './Mural.module.scss';

interface MuralProps {
  href: string;
  name: string;
  thumbnailSrc: string;
}

export const Mural = ({ href, name, thumbnailSrc }: MuralProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <UnstyledLink href={href}>
      <div
        className={styles.finishedMural}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.overlay} style={{ opacity: hovered ? 1 : 0 }}>
          {name}
        </div>
        <img src={thumbnailSrc} />
      </div>
    </UnstyledLink>
  );
};

interface UpcomingMuralProps {
  name: string;
  when: Date;
  where: string;
}

export const UpcomingMural = ({ name, when, where }: UpcomingMuralProps) => {
  return (
    <div className={styles.upcomingMural}>
      <img className={styles.fish} src="/salmon.png" />
      <div className={styles.text}>
        <span>Upcoming Event!</span>
        <br />
        <span className={styles.details}>
          {when.toDateString()} —{' '}
          {when.toLocaleTimeString(navigator.language, {
            hour: 'numeric',
            minute: '2-digit',
          })}{' '}
          @ {where}
        </span>
      </div>
    </div>
  );
};
