'use client';

import styles from './educationCard.module.scss';

export default function EducationCard({ item }) {
  return (
    <article className={styles.card}>
      <h4>{item.title}</h4>
      <p className={styles.inst}>{item.institution} • {item.period}</p>
      <p className={styles.desc}>{item.description}</p>
    </article>
  );
}
