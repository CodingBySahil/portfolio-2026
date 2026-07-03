'use client';

import Link from 'next/link';
import styles from './Footer.module.scss';
import { FaGithub, FaLinkedin, FaFacebookF } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/">CodingBySahil</Link>
          <p className={styles.tag}>Full Stack MERN • AI Instructor • Mentor</p>
        </div>

        <div className={styles.links}>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li>Full Stack Development</li>
              <li>AI Solutions</li>
              <li>Training & Mentorship</li>
            </ul>
          </div>
        </div>

        <div className={styles.social}>
          <h4>Connect</h4>
          <div className={styles.icons}>
            <a href="https://github.com/CodingBySahil" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/codingBySAHIL" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://www.facebook.com/codingBySahil/" target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} CodingBySahil. All rights reserved.</p>
      </div>
    </footer>
  );
}
