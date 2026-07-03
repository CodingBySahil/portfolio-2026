'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import { heroHighlights, projects, stats } from '@/lib/siteData';

const TYPE_SPEED = 90;
const DELETE_SPEED = 40;
const HOLD_TIME = 2000;

export default function Home() {
  const [typedText, setTypedText] = useState('Full Stack MERN Developer');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayed, setDisplayed] = useState('');

  const currentText = useMemo(() => heroHighlights[index % heroHighlights.length], [index]);

  useEffect(() => {
    let timeout;
    const tick = () => {
      if (isDeleting) {
        setDisplayed((prev) => currentText.slice(0, prev.length - 1));
      } else {
        setDisplayed((prev) => currentText.slice(0, prev.length + 1));
      }

      // When finished typing, pause then delete
      if (!isDeleting && displayed === currentText) {
        timeout = setTimeout(() => setIsDeleting(true), HOLD_TIME);
        return;
      }

      // When finished deleting, move to next
      if (isDeleting && displayed === '') {
        setIsDeleting(false);
        setIndex((prev) => prev + 1);
        return;
      }

      timeout = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    };

    timeout = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    return () => clearTimeout(timeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentText, isDeleting, displayed]);

  useEffect(() => {
    setTypedText(currentText);
  }, [currentText]);

  return (
    <section className={styles.heroSection}>
      <div className={styles.introGrid}>
        <div className={styles.introText}>
          <span className={styles.overline}>Hello, I’m Muhammad Sahil</span>
          <h1>Full Stack MERN Developer & AI Instructor</h1>
          <p>
            I build premium web applications and teach modern web development,
            AI, and MERN stack engineering. My focus is polished interfaces,
            scalable solutions, and delightful digital products.
          </p>
          <div className={styles.ctaGroup}>
            <Link href='/contact' className={styles.primaryButton}>
              Contact Me
            </Link>
            <Link href='#projects' className={styles.secondaryButton}>
              View Projects
            </Link>
          </div>
          <div className={styles.badgeGroup}>
            <Link href='https://github.com/CodingBySahil' target='_blank'>GitHub</Link>
            <Link href='https://www.linkedin.com/in/codingBySAHIL' target='_blank'>LinkedIn</Link>
          </div>
        </div>

        <div className={styles.heroCard}>
          <div className={styles.heroCardInner}>
            <div className={styles.heroTag}>Trusted by learners and teams</div>
            <div className={styles.heroHighlight}>
              <span className={`${styles.typed} ${isDeleting ? styles.deleting : styles.entering}`}>{displayed}</span>
              <span className={styles.cursor} aria-hidden='true'>|</span>
            </div>
            <div className={styles.heroStats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statBlock}>
                  <span>{item.value}+</span>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section id='projects' className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <p>Featured Projects</p>
          <h2>Selected Work</h2>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectMeta}>
                <span>{project.category}</span>
                <span>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techList}>
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectActions}>
                <Link href={project.github} target='_blank'>GitHub</Link>
                <Link href={project.demo} target='_blank'>Live Demo</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
