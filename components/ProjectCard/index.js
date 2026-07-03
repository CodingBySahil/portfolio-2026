'use client';

import styles from './projectCard.module.scss';

export default function ProjectCard({ project }) {
  return (
    <article className={styles.card} aria-labelledby={`proj-${project.title}`}>
      <h3 id={`proj-${project.title}`}>{project.title}</h3>
      <p className={styles.desc}>{project.description}</p>
      <div className={styles.meta}>
        <span className={styles.category}>{project.category}</span>
        <div className={styles.actions}>
          {project.github && (
            <a href={project.github} target='_blank' rel='noreferrer'>Code</a>
          )}
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noreferrer'>Demo</a>
          )}
        </div>
      </div>
    </article>
  );
}
