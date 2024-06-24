import styles from './WaveContainer.module.scss';

export const WaveContainer = ({
  color,
  children,
}: {
  color?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={styles.waveContainer}
      style={{ '--primary-color': color || 'var(--light-deep-blue)' } as any}
    >
      <div className={styles.topFront}></div>
      <div className={styles.topBack}></div>
      <div className={styles.content}>{children}</div>
      <div className={styles.bottomFront}></div>
      <div className={styles.bottomBack}></div>
    </div>
  );
};
