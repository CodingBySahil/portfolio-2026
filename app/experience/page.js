'use client';

import {
  FaBriefcase,
  FaCalendarAlt,
  FaBuilding,
  FaAward,
  FaLaptopCode,
  FaRocket,
  FaGraduationCap,
  FaArrowRight,
} from 'react-icons/fa';

import SectionTitle from '@/components/SectionTitle';
import { experience } from '@/lib/siteData';

export default function ExperiencePage() {
  return (
    <main className="bg-white dark:bg-slate-950">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800" />

        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl dark:bg-cyan-500/10" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl dark:bg-indigo-500/10" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">

          <SectionTitle
            eyebrow="Experience"
            title="Professional Journey"
          />

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            My journey as a Full Stack Developer, AI Instructor and Mentor has
            been focused on creating scalable digital products while helping
            students and professionals grow through practical learning.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <FaBriefcase className="text-4xl text-blue-600 dark:text-cyan-400" />
              <h3 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
                3+
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <FaLaptopCode className="text-4xl text-blue-600 dark:text-cyan-400" />
              <h3 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
                MERN
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <FaGraduationCap className="text-4xl text-blue-600 dark:text-cyan-400" />
              <h3 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
                AI
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Instructor & Mentor
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg">
              <FaRocket className="text-4xl text-blue-600 dark:text-cyan-400" />
              <h3 className="mt-5 text-3xl font-bold text-slate-900 dark:text-white">
                20+
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Successful Projects
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TIMELINE ================= */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="relative">

            <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 md:block" />

            <div className="space-y-14">

              {experience.map((item, index) => (

                <div
                  key={index}
                  className="group relative md:pl-20"
                >

                  {/* Timeline Dot */}

                  <div className="absolute left-0 top-8 hidden h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl dark:border-slate-950 dark:from-cyan-500 dark:to-blue-500 md:flex">

                    <FaBriefcase />

                  </div>

                  {/* Card */}

                  <div className="rounded-[30px] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

                    <div className="flex flex-wrap items-center justify-between gap-4">

                      <div>

                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                          {item.role}
                        </h2>

                        <div className="mt-3 flex flex-wrap items-center gap-5">

                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">

                            <FaBuilding />

                            <span>{item.company}</span>

                          </div>

                          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">

                            <FaCalendarAlt />

                            <span>{item.period}</span>

                          </div>

                        </div>

                      </div>

                      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600 dark:bg-cyan-500/10 dark:text-cyan-400">

                        Professional

                      </span>

                    </div>

                    <div className="mt-8 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/60">

                      <p className="leading-8 text-slate-600 dark:text-slate-300">

                        During this role, I contributed to designing,
                        developing and maintaining scalable web applications,
                        collaborating with teams, writing clean and reusable
                        code, optimizing performance, and delivering modern
                        user experiences while continuously improving my
                        technical expertise.

                      </p>

                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">

                      <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">

                        <FaAward className="text-2xl text-blue-600 dark:text-cyan-400" />

                        <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">
                          Leadership
                        </h4>

                      </div>

                      <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">

                        <FaLaptopCode className="text-2xl text-blue-600 dark:text-cyan-400" />

                        <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">
                          Development
                        </h4>

                      </div>

                      <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">

                        <FaRocket className="text-2xl text-blue-600 dark:text-cyan-400" />

                        <h4 className="mt-4 font-semibold text-slate-900 dark:text-white">
                          Innovation
                        </h4>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-6">

          <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 p-[1px]">

            <div className="rounded-[40px] bg-white dark:bg-slate-900 px-10 py-16 text-center">

              <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
                Looking for an Experienced Developer?
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I enjoy building high-quality web applications, solving
                challenging problems, mentoring developers, and creating
                scalable digital solutions using the latest technologies.
              </p>

              <button className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400">

                Let&apos;s Work Together

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}