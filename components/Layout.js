'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/lib/siteData';
import { FaGithub, FaLinkedin, FaFacebookF, FaMoon, FaSun } from 'react-icons/fa';
import styles from './Layout.module.scss';
import dynamic from 'next/dynamic';
const ThemeToggle = dynamic(() => import('@/components/ThemeToggle'), { ssr: false });
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const Layout = ({ children }) => {
  const pathname = usePathname();
  

  useEffect(() => {
    document.documentElement.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <ScrollProgress />
      <header className={styles.header}>
        <div className={styles.brand}>CodingBySahil</div>
        <nav className={styles.navbar} aria-label='Primary navigation'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? styles.active : ''}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.controls}>
          <ThemeToggle />
          <a href='https://github.com/CodingBySahil' target='_blank' rel='noreferrer' aria-label='GitHub'>
            <FaGithub />
          </a>
          <a href='https://www.linkedin.com/in/codingBySAHIL' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <FaLinkedin />
          </a>
          <a href='https://www.facebook.com/codingBySahil/' target='_blank' rel='noreferrer' aria-label='Facebook'>
            <FaFacebookF />
          </a>
        </div>
      </header>
      <main className={styles.mainContent}>{children}</main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} CodingBySahil. All rights reserved.</p>
      </footer>
      <BackToTop />
    </div>
  );
};

export default Layout;
