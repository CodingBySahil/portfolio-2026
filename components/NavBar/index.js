'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './NavBar.module.scss';
import dynamic from 'next/dynamic';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
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
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" aria-label="CodingBySahil">
            <span className={styles.logo}>CodingBySahil</span>
          </Link>
        </div>

        <nav className={styles.navigation} aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? styles.active : ''}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <button
            className={styles.hamburger}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.hamburgerBox} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.mobileSocial}>
          <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  );
}
