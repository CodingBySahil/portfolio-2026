'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    // <footer className="bg-gradient-to-b from-white/10 to-white/5 dark:from-slate-900/50 dark:to-slate-900/30 border-t border-slate-200 dark:border-slate-700" role="contentinfo">
    //   <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:items-start">
    //     <div>
    //       <Link href="/" className="font-bold text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
    //         CodingBySahil
    //       </Link>
    //       <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">Full Stack MERN • AI Instructor • Mentor</p>
    //     </div>

    //     <div>
    //       <div>
    //         <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-3">Quick Links</h4>
    //         <ul className="space-y-2">
    //           <li><Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</Link></li>
    //           <li><Link href="/projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</Link></li>
    //           <li><Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link></li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div>
    //       <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-3">Connect</h4>
    //       <div className="flex gap-3">
    //         <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"><FaGithub size={18} /></a>
    //         <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"><FaLinkedin size={18} /></a>
    //         <a href="https://www.facebook.com/codingBySahil/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"><FaFacebookF size={18} /></a>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="border-t border-slate-200 dark:border-slate-700 py-6 text-center">
    //     <p className="text-slate-600 dark:text-slate-400 text-sm">© {new Date().getFullYear()} CodingBySahil. All rights reserved.</p>
    //   </div>
    // </footer>

    <footer className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:border-slate-800 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">

  {/* Animated Background */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">

    <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px] dark:bg-cyan-500/10 animate-pulse"></div>

    <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-500/10 blur-[160px] dark:bg-indigo-500/10 animate-pulse"></div>

    <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]"></div>

  </div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">

    <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr]">

      {/* LEFT SIDE */}

      <div>

        <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">

          🚀 Available for Freelance & Full-Time Opportunities

        </span>

        <h2 className="mt-8 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">

          Let's build something

          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400">

            extraordinary together.

          </span>

        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">

          I'm Muhammad Sahil, a Full Stack MERN Developer, AI Instructor and Computer Science Trainer.

          I specialize in building modern, scalable web applications with beautiful UI, excellent user experience and high-performance architecture.

        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-5">

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-300/40 dark:bg-cyan-500 dark:hover:bg-cyan-400 dark:hover:shadow-cyan-500/30"
          >
            Hire Me
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-cyan-500 dark:hover:text-cyan-400"
          >
            View Projects
          </Link>

        </div>

        {/* Social Icons */}

        <div className="mt-12 flex flex-wrap gap-4">

          <a
            href="https://github.com/CodingBySahil"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-500 dark:hover:shadow-cyan-500/20"
          >
            <FaGithub className="text-2xl text-slate-700 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400" />
          </a>

          <a
            href="https://www.linkedin.com/in/codingBySAHIL"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-500 dark:hover:shadow-cyan-500/20"
          >
            <FaLinkedin className="text-2xl text-slate-700 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400" />
          </a>

          <a
            href="https://www.facebook.com/codingBySahil"
            target="_blank"
            rel="noreferrer"
            className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-cyan-500 dark:hover:shadow-cyan-500/20"
          >
            <FaFacebookF className="text-2xl text-slate-700 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400" />
          </a>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div>

        <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-900/70">

          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-cyan-400">

            Stay Connected

          </span>

          <h3 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">

            Subscribe to my newsletter

          </h3>

          <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">

            Get updates about new projects, tutorials, AI content, MERN development, career guidance and modern technologies.

          </p>

          <div className="mt-8">

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-cyan-500"
            />

            <button className="mt-5 w-full rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500">

              Subscribe

            </button>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">

              <p className="text-sm text-slate-500 dark:text-slate-400">

                Experience

              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">

                3+ Years

              </h4>

            </div>

            <div className="rounded-2xl bg-slate-100 p-5 dark:bg-slate-800">

              <p className="text-sm text-slate-500 dark:text-slate-400">

                Projects

              </p>

              <h4 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">

                30+

              </h4>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* PART 2 STARTS HERE */}
        {/* Right Section */}
        <div className="lg:col-span-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Contact */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                Contact
              </h3>

              <div className="space-y-4">

                <a
                  href="mailto:codingbysahil@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-cyan-500/10 flex items-center justify-center text-blue-600 dark:text-cyan-400 group-hover:scale-110 transition">
                    ✉️
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Email
                    </p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">
                      codingbysahil@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923192141818"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:scale-110 transition">
                    📱
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      WhatsApp
                    </p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">
                      +92 319 2141818
                    </p>
                  </div>
                </a>

                <div className="group flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition">
                    📍
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Location
                    </p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">
                      Peshawar, Pakistan
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social */}
            <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-5">
                Follow Me
              </h3>

              <div className="grid grid-cols-3 gap-4">

                <a
                  href="https://github.com/CodingBySahil"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-700 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-cyan-400 transition"
                >
                  <FaGithub className="text-2xl text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition" />
                  <span className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    GitHub
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/codingBySAHIL"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-700 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-cyan-400 transition"
                >
                  <FaLinkedin className="text-2xl text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition" />
                  <span className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    LinkedIn
                  </span>
                </a>

                <a
                  href="https://www.facebook.com/codingBySahil"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 dark:border-slate-700 py-5 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-blue-500 dark:hover:border-cyan-400 transition"
                >
                  <FaFacebookF className="text-2xl text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition" />
                  <span className="mt-2 text-xs text-slate-600 dark:text-slate-400">
                    Facebook
                  </span>
                </a>

              </div>

              <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-cyan-500 dark:via-blue-500 dark:to-indigo-500 p-[1px]">

                <div className="rounded-2xl bg-white dark:bg-slate-900 px-6 py-5">

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Let's Build Something Amazing 🚀
                  </h4>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    Available for freelance projects, full-time opportunities,
                    startup collaborations, mentoring, and AI solutions.
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center rounded-xl bg-blue-600 dark:bg-cyan-500 px-5 py-3 text-white font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300"
                  >
                    Start a Project →
                  </Link>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-slate-200 dark:border-slate-800 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              CodingBySahil
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy"
              className="text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              Terms
            </Link>

            <Link
              href="/sitemap"
              className="text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 transition"
            >
              Sitemap
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
