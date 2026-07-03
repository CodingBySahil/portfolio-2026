'use client';

import { useEffect, useState } from 'react';
import styles from './scrollProgress.module.scss';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const pct = height > 0 ? Math.min(100, Math.round((scrolled / height) * 100)) : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.progress} aria-hidden>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
}
