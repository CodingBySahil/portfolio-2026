'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myDP from '@/assets/myDP.jpg';
import styles from './page.module.scss';
import {
  heroHighlights,
  projects,
  stats,
  skills,
  testimonials,
  experience,
} from '@/lib/siteData';

const TYPE_SPEED = 80;
const DELETE_SPEED = 36;
const HOLD_TIME = 2400;

function useTypewriter(list) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const current = useMemo(() => list[index % list.length], [index, list]);

  useEffect(() => {
    let t;
    const tick = () => {
      if (isDeleting) setDisplayed((p) => current.slice(0, p.length - 1));
      else setDisplayed((p) => current.slice(0, p.length + 1));

      if (!isDeleting && displayed === current) {
        t = setTimeout(() => setIsDeleting(true), HOLD_TIME);
        return;
      }

      if (isDeleting && displayed === '') {
        setIsDeleting(false);
        setIndex((i) => i + 1);
        return;
      }

      t = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    };

    t = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPE_SPEED);
    return () => clearTimeout(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, displayed, isDeleting]);

  return { displayed, isDeleting };
}

export default function Home() {
  const { displayed, isDeleting } = useTypewriter(heroHighlights);
  const [counts, setCounts] = useState(() => stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((s, idx) => {
      return setInterval(() => {
        setCounts((prev) => {
          const next = [...prev];
          if (next[idx] < s.value) next[idx] += Math.ceil(s.value / 50);
          if (next[idx] > s.value) next[idx] = s.value;
          return next;
        });
      }, 45 + idx * 20);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  const [testIndex, setTestIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setTestIndex((i) => (i + 1) % testimonials.length), 5200);
    return () => clearInterval(t);
  }, []);

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroInner}>
          <div className={styles.left}>
            <p className={styles.overline}>Hello, I’m Muhammad Sahil</p>
            <h1 className={styles.title}>
              Building delightful products —
              <span className={styles.highlight}> {displayed}</span>
              <span className={styles.cursor} aria-hidden>▍</span>
            </h1>
            <p className={styles.lead}>
              Full Stack MERN Developer, AI Instructor and mentor. I design,
              implement, and teach modern web applications with a focus on
              performance, accessibility and delightful UX.
            </p>

            <div className={styles.heroCtas}>
              <Link href="/resume.pdf" className={styles.btnPrimary} target="_blank">Download Resume</Link>
              <Link href="#projects" className={styles.btnAlt}>View Projects</Link>
              <Link href="/contact" className={styles.btnGhost}>Hire Me</Link>
            </div>

            <div className={styles.socialRow}>
              <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.imageCard} aria-hidden>
              <div className={styles.imageRing} />
              <div className={styles.imagePlaceholder}>
                <Image
                  src={myDP}
                  alt="Muhammad Sahil"
                  fill
                  sizes="(max-width:640px) 220px, (max-width:1024px) 320px, 380px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className={styles.floatIcons}>
                {[ 'React', 'Next', 'Node', 'Mongo', 'TS', 'JS', 'Tailwind', 'AI' ].map((t, i) => (
                  <div key={t} className={styles.floatIcon} style={{ ['--i']: i }}>
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.stats} aria-label="Statistics">
        <div className={styles.statsInner}>
          {stats.map((s, idx) => (
            <div key={s.label} className={styles.statCard}>
              <div className={styles.statValue}>{counts[idx]}{counts[idx] === s.value ? '+' : ''}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.aboutPreview} id="about">
        <div className={styles.sectionHead}>
          <p>About</p>
          <h2>Professional Story & Mission</h2>
        </div>
        <div className={styles.aboutGrid}>
          <div>
            <p>
              I'm passionate about building polished web products and teaching
              others to do the same. My work blends engineering rigor with
              thoughtful design to ship reliable, maintainable experiences.
            </p>
            <p>
              Mission: Empower learners and teams by delivering practical
              systems and mentoring the next generation of engineers.
            </p>
            <Link href="/about" className={styles.readMore}>Read More →</Link>
          </div>
          <div className={styles.aboutCards}>
            <div className={styles.card}>Teaching • Hands-on learning</div>
            <div className={styles.card}>AI • Practical applications</div>
            <div className={styles.card}>Development • Scalable systems</div>
          </div>
        </div>
      </section>

      <section className={styles.skills} id="skills">
        <div className={styles.sectionHead}>
          <p>Skills</p>
          <h2>Core Competencies</h2>
        </div>
        <div className={styles.skillGrid}>
          {skills.map((s) => (
            <div key={s.category} className={styles.skillCard}>
              <h4>{s.category}</h4>
              <div className={styles.skillList}>
                {s.items.map((it) => (
                  <span key={it} className={styles.skillPill}>{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.projects} id="projects">
        <div className={styles.sectionHead}>
          <p>Featured</p>
          <h2>Selected Projects</h2>
        </div>
        <div className={styles.featureGrid}>
          {projects.map((p) => (
            <article key={p.title} className={styles.featureCard}>
              <div className={styles.featureMedia}>
                <div className={styles.mediaPlaceholder} />
                <span className={styles.ribbon}>{p.status}</span>
              </div>
              <div className={styles.featureBody}>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className={styles.techRow}>{p.tech.map((t) => <span key={t}>{t}</span>)}</div>
                <div className={styles.actionsRow}>
                  <Link href={p.github} target="_blank">GitHub</Link>
                  <Link href={p.demo} target="_blank">Live Demo</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.teaching}>
        <div className={styles.sectionHead}>
          <p>Teaching</p>
          <h2>Mentorship & Courses</h2>
        </div>
        <div className={styles.teachGrid}>
          <div className={styles.teachCard}>
            <h4>Web Development</h4>
            <p>Project based learning for practical skills.</p>
          </div>
          <div className={styles.teachCard}>
            <h4>Artificial Intelligence</h4>
            <p>AI fundamentals and applied workflows for engineers.</p>
          </div>
          <div className={styles.teachCard}>
            <h4>Mentorship</h4>
            <p>Career guidance, code reviews, and portfolio reviews.</p>
          </div>
        </div>
      </section>

      <section className={styles.timeline}>
        <div className={styles.sectionHead}>
          <p>Journey</p>
          <h2>Professional Timeline</h2>
        </div>
        <ol className={styles.timelineList}>
          {experience.map((e) => (
            <li key={e.role} className={styles.timelineItem}>
              <strong>{e.period}</strong>
              <h4>{e.role}</h4>
              <p>{e.company}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.technologies}>
        <div className={styles.sectionHead}>
          <p>Technologies</p>
          <h2>Tooling & Platforms</h2>
        </div>
        <div className={styles.techWall}>
          {['React','Next.js','Node.js','MongoDB','TypeScript','Tailwind','Express','AI','Git','GitHub'].map((t) => (
            <div key={t} className={styles.techItem}>{t}</div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.sectionHead}>
          <p>Testimonials</p>
          <h2>What people say</h2>
        </div>
        <div className={styles.testWrap}>
          {testimonials.map((t, i) => (
            <blockquote key={t.name} className={`${styles.testCard} ${i === testIndex ? styles.visible : ''}`}>
              <p>“{t.quote}”</p>
              <footer>— {t.name}, <span>{t.role}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className={styles.contactCta} id="contact">
        <div className={styles.ctaInner}>
          <h2>Let's build something amazing together</h2>
          <div className={styles.ctaBtns}>
            <Link href="/contact" className={styles.btnPrimary}>Let's Talk</Link>
            <a href="https://wa.me/923192141818" className={styles.btnAlt} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="mailto:hello@example.com" className={styles.btnGhost}>Email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
