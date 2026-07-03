'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myDP from '@/assets/myDP.jpg';
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
    <main className="pb-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16" aria-label="Hero">
        <div className="flex gap-8 items-center max-w-4xl mx-auto px-5 lg:px-0">
          <div className="flex-1">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest">
              Hello, I&apos;m Muhammad Sahil
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-1 mb-4 text-slate-900 dark:text-white">
              Building delightful products —
              <span className="text-blue-600 dark:text-blue-400 ml-2">{displayed}</span>
              <span className="ml-2 text-blue-600 dark:text-blue-400 inline-block animate-pulse" aria-hidden>▍</span>
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-5">
              Full Stack MERN Developer, AI Instructor and mentor. I design,
              implement, and teach modern web applications with a focus on
              performance, accessibility and delightful UX.
            </p>

            <div className="flex gap-3 flex-wrap mb-6">
              <Link href="/resume.pdf" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300" target="_blank">
                Download Resume
              </Link>
              <Link href="#projects" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                View Projects
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all duration-300">
                Hire Me
              </Link>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="w-96 hidden lg:block" aria-hidden>
            <div className="relative rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-8">
              <div className="w-80 h-80 relative rounded-2xl overflow-hidden">
                <Image
                  src={myDP}
                  alt="Muhammad Sahil"
                  fill
                  sizes="(max-width:640px) 220px, (max-width:1024px) 320px, 380px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
              <div className="space-y-3 mt-6">
                {['React', 'Next', 'Node', 'Mongo', 'TS', 'JS', 'Tailwind', 'AI'].map((tech) => (
                  <div key={tech} className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-semibold mr-2 animate-float">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-t border-b border-slate-200 dark:border-slate-700" aria-label="Statistics">
        <div className="max-w-4xl mx-auto px-5 lg:px-0">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {stats.map((s, idx) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                  {counts[idx]}{counts[idx] === s.value ? '+' : ''}
                </div>
                <div className="text-slate-600 dark:text-slate-400 text-sm mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24" id="about">
        <div className="max-w-5xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Professional Story & Mission</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m passionate about building polished web products and teaching
                others to do the same. My work blends engineering rigor with
                thoughtful design to ship reliable, maintainable experiences.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Mission: Empower learners and teams by delivering practical
                systems and mentoring the next generation of engineers.
              </p>
              <Link href="/about" className="inline-flex text-blue-600 dark:text-blue-400 hover:underline font-semibold">
                Read More →
              </Link>
            </div>
            <div className="space-y-3">
              {['Teaching • Hands-on learning', 'AI • Practical applications', 'Development • Scalable systems'].map((card) => (
                <div key={card} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-slate-900 dark:text-white font-medium">
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24" id="skills">
        <div className="max-w-5xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Core Competencies</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((s) => (
              <div key={s.category} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">{s.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="inline-block bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs px-2 py-1 rounded-full font-medium">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24" id="projects">
        <div className="max-w-6xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Featured</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Selected Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48 bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <span className="absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {p.status}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">{p.description}</p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {p.tech.map((t) => (
                      <span key={t} className="text-xs text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={p.github} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                      GitHub
                    </Link>
                    <Link href={p.demo} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-semibold">
                      Live Demo
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Teaching</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Mentorship & Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Web Development', 'Artificial Intelligence', 'Mentorship'].map((title, idx) => {
              const descriptions = [
                'Project based learning for practical skills.',
                'AI fundamentals and applied workflows for engineers.',
                'Career guidance, code reviews, and portfolio reviews.',
              ];
              return (
                <div key={title} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{descriptions[idx]}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Professional Timeline</h2>
          </div>
          <ol className="space-y-4">
            {experience.map((e) => (
              <li key={e.role} className="flex gap-4 pb-6 border-b border-slate-200 dark:border-slate-700 last:border-b-0">
                <div className="text-blue-600 dark:text-blue-400 font-bold text-sm min-w-fit">{e.period}</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">{e.role}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{e.company}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-5xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Technologies</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Tooling & Platforms</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind', 'Express', 'AI', 'Git', 'GitHub'].map((t) => (
              <div key={t} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-4 py-2 rounded-lg text-slate-900 dark:text-white font-semibold">
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-5 lg:px-0">
          <div className="mb-8">
            <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">What people say</h2>
          </div>
          <div className="relative h-40">
            {testimonials.map((t, i) => (
              <blockquote 
                key={t.name}
                className={`absolute inset-0 transition-opacity duration-500 ${i === testIndex ? 'opacity-100' : 'opacity-0'}`}
              >
                <p className="text-lg italic text-slate-700 dark:text-slate-300 mb-4">&quot;{t.quote}&quot;</p>
                <footer className="text-slate-600 dark:text-slate-400">
                  — {t.name}, <span className="font-semibold">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white" id="contact">
        <div className="max-w-3xl mx-auto px-5 lg:px-0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let&apos;s build something amazing together</h2>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Let&apos;s Talk
            </Link>
            <a href="https://wa.me/923192141818" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold bg-white/20 text-white border border-white/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300" target="_blank" rel="noreferrer">
              WhatsApp
            </a>
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white border border-white/40 hover:bg-white/10 transition-all duration-300">
              Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
