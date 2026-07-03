'use client';

import styles from './sectionTitle.module.scss';

export default function SectionTitle({ eyebrow, title, children }) {
  return (
    <header className={styles.header}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.title}>{title}</h2>
      {children && <div className={styles.lead}>{children}</div>}
    </header>
  );
}
