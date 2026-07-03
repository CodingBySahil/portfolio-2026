'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="font-bold text-xl md:text-2xl text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="CodingBySahil">
            CodingBySahil
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Primary navigation">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a 
            href="https://github.com/CodingBySahil" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="GitHub"
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/codingBySAHIL" 
            target="_blank" 
            rel="noreferrer" 
            aria-label="LinkedIn"
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            <FaLinkedin size={20} />
          </a>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <HiX size={24} className="text-slate-900 dark:text-white" />
            ) : (
              <HiMenuAlt3 size={24} className="text-slate-900 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <nav className="max-w-7xl mx-auto px-4 py-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`block py-2 px-3 rounded-lg transition-all ${
                      pathname === item.href
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                LinkedIn
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
