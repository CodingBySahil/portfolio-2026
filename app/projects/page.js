'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaCode,
  FaLayerGroup,
} from 'react-icons/fa';

import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/siteData';

const categories = [
  'All',
  'Full Stack',
  'Frontend',
  'Backend',
  'React',
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchCategory =
        activeCategory === 'All'
          ? true
          : project.category === activeCategory;

      const matchSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.tech.join(' ').toLowerCase().includes(search.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="bg-white dark:bg-slate-950">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />

        <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-cyan-500/10" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <SectionTitle
            eyebrow="Portfolio"
            title="Featured Projects"
          />

          <div className="mt-8 max-w-3xl">

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              A collection of real-world applications built with modern
              technologies including React, Next.js, Node.js, Express,
              MongoDB, Tailwind CSS, Socket.IO and AI integrations.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">

              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                {projects.length}+
              </div>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Completed Projects
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">

              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                20+
              </div>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Technologies Used
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">

              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                AI
              </div>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Integrated Solutions
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">

              <div className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                100%
              </div>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Responsive Design
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FILTER ================= */}

      <section className="py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative max-w-md w-full">

              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search project..."
                className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-4 pl-14 pr-5 outline-none transition focus:border-blue-500 dark:focus:border-cyan-400"
              />

            </div>

            <div className="flex flex-wrap gap-3">

              {categories.map((category) => (

                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-6 py-3 font-medium transition-all duration-300

                  ${
                    activeCategory === category
                      ? 'bg-blue-600 text-white dark:bg-cyan-500'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500'
                  }
                  
                  `}
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= PROJECT GRID ================= */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredProjects.map((project) => (

              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative h-60 overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">

                  <div className="absolute inset-0 flex items-center justify-center">

                    <FaLayerGroup className="text-7xl text-white/20" />

                  </div>

                  <div className="absolute left-5 top-5 rounded-full bg-white/20 px-4 py-1 text-sm text-white backdrop-blur">

                    {project.status}

                  </div>

                  <div className="absolute right-5 top-5 rounded-full bg-black/20 px-4 py-1 text-sm text-white backdrop-blur">

                    {project.category}

                  </div>

                </div>

                {/* Content */}

                <div className="p-7">

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">

                    {project.title}

                  </h3>

                  <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">

                    {project.description}

                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {project.tech.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  <div className="mt-8 flex gap-4">

                    <Link
                      href={project.github}
                      target="_blank"
                      className="flex-1 rounded-xl bg-slate-900 py-3 text-center font-semibold text-white transition hover:bg-black dark:bg-slate-800 dark:hover:bg-slate-700"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <FaGithub />
                        GitHub
                      </span>
                    </Link>

                    <Link
                      href={project.demo}
                      target="_blank"
                      className="flex-1 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <FaExternalLinkAlt />
                        Live Demo
                      </span>
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}