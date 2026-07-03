'use client';

import styles from './skillCard.module.scss';

export default function SkillCard({ category, items }) {
  return (
    <section className={styles.card}>
      <h4>{category}</h4>
      <ul>
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  );
}
