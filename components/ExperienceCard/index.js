'use client';

import styles from './experienceCard.module.scss';

export default function ExperienceCard({ item }) {
  return (
    <article className={styles.card}>
      <header>
        <h4>{item.role}</h4>
        <p className={styles.meta}>{item.company} • {item.period}</p>
      </header>
      <ul>
        {item.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </article>
  );
}
