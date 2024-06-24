'use client';
import { useEffect, useState } from 'react';
import styles from './Paginator.module.scss';

interface PaginatorProps {
  elements: React.ReactNode[];
  perPage: number;
  intervalMS: number;
}

export const Paginator = ({
  elements,
  perPage,
  intervalMS,
}: PaginatorProps) => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (elements.length <= perPage) return;

    const cycle = setInterval(() => {
      setIndex(prev => (prev + 1) % (elements.length / perPage));
    }, intervalMS);

    return () => clearInterval(cycle);
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.showcase}>
        {elements.slice(
          index * perPage,
          Math.min(index * perPage + perPage, elements.length)
        )}
      </div>
      <div className={styles.ticker}>
        {elements.length > perPage &&
          new Array(Math.ceil(elements.length / perPage))
            .fill(null)
            .map((_, i) => (
              <button
                key={i}
                data-selected={index === i}
                onClick={() => setIndex(i)}
              />
            ))}
      </div>
    </div>
  );
};
