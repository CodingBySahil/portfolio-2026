'use client';

import { useState } from 'react';
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaBrain,
  FaUsers,
  FaSearch,
  FaCheckCircle,
} from 'react-icons/fa';

import SectionTitle from '@/components/SectionTitle';
import { skills } from '@/lib/siteData';

const icons = {
  Frontend: <FaLaptopCode />,
  Backend: <FaServer />,
  Database: <FaDatabase />,
  Languages: <FaCode />,
  Tools: <FaCode />,
  AI: <FaBrain />,
  Soft: <FaUsers />,
};

export default function SkillsPage() {
  const [search, setSearch] = useState('');

  const filteredSkills = skills.filter((skill) => {
    return (
      skill.category.toLowerCase().includes(search.toLowerCase()) ||
      skill.items.some((item) =>
        item.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  return (
    <main className="bg-white dark:bg-slate-950">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />

        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-cyan-500/10" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <SectionTitle
            eyebrow="Skills"
            title="Technical & Professional Expertise"
          />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I specialize in building scalable web applications using modern
            frontend and backend technologies while following clean coding,
            accessibility and performance best practices.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                20+
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Technologies
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                3+
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                MERN
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <h2 className="text-4xl font-bold text-blue-600 dark:text-cyan-400">
                AI
              </h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Modern Workflows
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= SEARCH ================= */}

      <section className="py-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="relative max-w-lg mx-auto">

            <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />

            <input
              type="text"
              placeholder="Search Skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 py-4 pl-14 pr-5 text-slate-800 dark:text-white outline-none transition focus:border-blue-500 dark:focus:border-cyan-400"
            />

          </div>

        </div>

      </section>

      {/* ================= SKILLS GRID ================= */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {filteredSkills.map((skill) => (

              <div
                key={skill.category}
                className="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-3xl text-white dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">

                    {icons[skill.category] || <FaCode />}

                  </div>

                  <span className="rounded-full bg-blue-100 dark:bg-cyan-500/10 px-4 py-2 text-xs font-semibold text-blue-600 dark:text-cyan-400">
                    {skill.items.length} Skills
                  </span>

                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                  {skill.category}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3">

                  {skill.items.map((item) => (

                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 transition hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500"
                    >
                      <FaCheckCircle className="text-xs" />
                      {item}
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-28">

        <div className="max-w-5xl mx-auto px-6">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 p-[1px]">

            <div className="rounded-[40px] bg-white dark:bg-slate-900 px-10 py-16 text-center">

              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Always Learning New Technologies
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Technology evolves every day, and so do I. I continuously
                explore modern frameworks, AI tools, cloud technologies, and
                best development practices to deliver better digital products.
              </p>

              <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400">
                Let's Build Together 🚀
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}