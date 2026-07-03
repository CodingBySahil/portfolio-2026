'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { CiMenuBurger } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import logo from '@/assets/logo.svg';

const links = [
  { id: 1, label: 'home', href: '#hero' },
  { id: 2, label: 'features', href: '#features' },
  { id: 3, label: 'portfolio', href: '#portfolio' },
  { id: 4, label: 'resume', href: '#resume' },
  { id: 5, label: 'testimonial', href: '#testimonial' },
  { id: 6, label: 'blog', href: '#blog' },
  { id: 7, label: 'contact', href: '#contact' },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 200);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${isSticky ? 'backdrop-blur-xl bg-white/80 shadow-sm dark:bg-slate-900/90' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-slate-900 dark:text-white" aria-label="Home">
          <Image src={logo} alt="CodingBySahil logo" width={44} height={44} className="rounded-2xl" />
          <span className="text-lg font-semibold">CodingBySahil</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            {links.map(({ id, label, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  onClick={() => setActiveSection(label)}
                  className={`transition-colors duration-200 ${activeSection === label ? 'text-blue-600 dark:text-blue-400' : 'hover:text-slate-900 dark:hover:text-white'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 md:hidden"
          aria-expanded={navOpen}
          aria-label={navOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setNavOpen((value) => !value)}
        >
          {navOpen ? <IoCloseOutline size={20} /> : <CiMenuBurger size={20} />}
        </button>
      </div>

      {navOpen && (
        <div className="border-t border-slate-200 bg-white/95 py-6 shadow-xl backdrop-blur-xl dark:border-slate-700 dark:bg-slate-950/95 md:hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ul className="space-y-3 text-base font-semibold text-slate-700 dark:text-slate-200">
              {links.map(({ id, label, href }) => (
                <li key={id}>
                  <Link
                    href={href}
                    onClick={() => setNavOpen(false)}
                    className="block rounded-2xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                <FaLinkedinIn />
              </a>
              <a href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;