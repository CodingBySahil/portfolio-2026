'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white/10 to-white/5 dark:from-slate-900/50 dark:to-slate-900/30 border-t border-slate-200 dark:border-slate-700" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:items-start">
        <div>
          <Link href="/" className="font-bold text-lg text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            CodingBySahil
          </Link>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm">Full Stack MERN • AI Instructor • Mentor</p>
        </div>

        <div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">About</Link></li>
              <li><Link href="/projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide mb-3">Connect</h4>
          <div className="flex gap-3">
            <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"><FaGithub size={18} /></a>
            <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"><FaLinkedin size={18} /></a>
            <a href="https://www.facebook.com/codingBySahil/" target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"><FaFacebookF size={18} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-700 py-6 text-center">
        <p className="text-slate-600 dark:text-slate-400 text-sm">© {new Date().getFullYear()} CodingBySahil. All rights reserved.</p>
      </div>
    </footer>
  );
}
