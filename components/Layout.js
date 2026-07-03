'use client';

import { useEffect } from 'react';

import styles from './Layout.module.scss';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';

const Layout = ({ children }) => {
  

  useEffect(() => {
    document.documentElement.style.transition = 'background-color 0.4s ease, color 0.4s ease';
  }, []);

  return (
    <div className={styles.pageWrapper}>
      <ScrollProgress />
      <NavBar />
      <main className={styles.mainContent}>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
