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
        className={styles.mural}
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
